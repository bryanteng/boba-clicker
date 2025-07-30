import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../redux/bobaSlice";
import { updateMonstersSlain } from "../redux/userSlice";
import { addNotification } from "../redux/notificationSlice";
import { monsterImage } from "./../util/items.js";
import "./Monster.css";

function Monster({ spawnMonster, setSpawnMonster }) {
  const dispatch = useDispatch();
  const lifetimeBoba = useSelector((state) => state.boba.totalBoba);
  const weaponDamage = useSelector((state) => state.user.weaponDamage);
  // difficult is time in seconds to defeat monster, reward is liftetime boba multiplier
  const monsters = [
    {
      name: "Bobamonster",
      health: 100,
      speed: 20,
      hue: 55,
      saturate: 10,
      spawnRate: 30,
      difficulty: 10000,
      reward: 0.1,
    },
    {
      name: "Bobamonster II",
      health: 200,
      speed: 30,
      hue: 150,
      saturate: 10,
      spawnRate: 20,
      difficulty: 12000,
      reward: 0.2,
    },
    {
      name: "Bobamonster III",
      health: 300,
      speed: 40,
      hue: 180,
      saturate: 10,
      spawnRate: 20,
      difficulty: 13000,
      reward: 0.3,
    },
    {
      name: "Bobamonster IV",
      health: 400,
      speed: 50,
      hue: 245,
      saturate: 10,
      spawnRate: 15,
      difficulty: 14000,
      reward: 0.5,
    },
    {
      name: "Bobamonster V",
      health: 500,
      speed: 60,
      hue: 380,
      saturate: 10,
      spawnRate: 10,
      difficulty: 15000,
      reward: 1,
    },
    {
      name: "Bobamonster King",
      health: 600,
      speed: 70,
      hue: 0,
      saturate: 0,
      spawnRate: 5,
      difficulty: 15000,
      reward: 1.5,
    },
  ];

  const MAX_WIDTH = Math.floor(window.innerWidth * 0.6); // cant spawn on shop to avoid accidental buying
  const MAX_HEIGHT = window.innerHeight - 250; // account for height of monster
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [location, setLocation] = useState({ x: MAX_WIDTH, y: MAX_HEIGHT });
  const [monster, setMonster] = useState(monsters[0]);
  const [health, setHealth] = useState(100);
  const [maxHealth, setMaxHealth] = useState(100);
  const [monsterSpawned, setMonsterSpawned] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (!spawnMonster) return;
    const newMonster = pickWithWeight();
    setMonster(newMonster);
    setHealth(newMonster.health);
    setMaxHealth(newMonster.health);
    setMonsterSpawned(true);
    setCountdown(newMonster.difficulty);
    const monsterLocationInterval = setInterval(() => {
      const newX = Math.floor(Math.random() * MAX_WIDTH);
      const newY = Math.floor(Math.random() * MAX_HEIGHT);
      setLocation({ x: newX, y: newY });
    }, 2000);

    const countdownFramerate = 100;
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          clearInterval(countdownInterval);
          dispatch(
            addNotification({
              type: "failure",
              message: `Time's up! ${monster.name} escaped!`,
              autoClose: 5000,
            }),
          );
          setMonsterSpawned(false);
          return 0;
        }
        return prevCountdown - countdownFramerate;
      });
    }, countdownFramerate);

    const monsterSpawnTimeout = setTimeout(() => {
      setMonsterSpawned(false);
      setSpawnMonster(false);
    }, newMonster.difficulty);

    return () => {
      clearInterval(monsterLocationInterval);
      clearTimeout(monsterSpawnTimeout);
      clearInterval(countdownInterval);
      setMonsterSpawned(false);
    };
  }, [spawnMonster]);

  useEffect(() => {
    const monsterMoveInterval = setInterval(() => {
      setPosition((prevPosition) => {
        const deltaX = location.x - prevPosition.x;
        const deltaY = location.y - prevPosition.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const speed = 20;
        const moveX = (deltaX / distance) * speed;
        const moveY = (deltaY / distance) * speed;
        const newX = prevPosition.x + moveX;
        const newY = prevPosition.y + moveY;
        return { x: newX, y: newY };
      });
    }, 150);

    return () => clearInterval(monsterMoveInterval);
  }, [location]);

  const pickWithWeight = () => {
    const rates = monsters.map((level) => level.spawnRate);
    let sum = 0;
    const weigths = [];
    for (let i = 0; i < rates.length; i++) {
      sum += rates[i];
      weigths.push(sum);
    }

    const random = Math.random() * sum;
    for (let i = 0; i < rates.length; i++) {
      if (random <= weigths[i]) {
        return monsters[i];
      }
    }
    return monsters[0];
  };

  const handleMonsterClick = () => {
    setHealth((prevHealth) => {
      const newHealth = prevHealth - weaponDamage;
      if (newHealth <= 0) {
        dispatch(
          addNotification({
            type: "success",
            message: `Success! ${monster.name} defeated! You earned ${(monster.reward * lifetimeBoba).toLocaleString()} boba!`,
            autoClose: 5000,
          }),
        );
        setPosition({ x: 0, y: 0 });
        dispatch(incrementByAmount(monster.reward * lifetimeBoba));
        dispatch(updateMonstersSlain());
        setMonsterSpawned(false);
        return 0; // Reset health to 0
      }
      return newHealth;
    });
  };

  const healthPercentage = (health / maxHealth) * 100;
  const countdownPercentage = (countdown / monster.difficulty) * 100;

  return (
    <>
      {monsterSpawned ? (
        <>
          <div
            className="monster-container"
            style={{ left: position.x, top: position.y }}
          >
            <img
              className="monster"
              src={monsterImage}
              alt={monster.name}
              style={{
                filter: `hue-rotate(${monster.hue}deg) saturate(${monster.saturate})`,
              }}
              onClick={handleMonsterClick}
            />
          </div>
          <div className="monster-info">
            <h3>{monster.name}</h3>
            <div className="monster-countdown">
              <span className="countdown-label">
                Time left: {(countdown / 1000).toFixed(1)}s
              </span>
              <div className="bar-outer">
                <div
                  className="bar-inner countdown-bar"
                  style={{ width: `${countdownPercentage}%` }}
                ></div>
              </div>

              <span className="health-label">
                Health: {health} / {maxHealth}
              </span>
              <div className="bar-outer">
                <div
                  className="bar-inner health-bar"
                  style={{ width: `${healthPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Monster;
