// Terminal Game
// https://www.codewars.com/kata/586c1cf4b98de0399300001d

function combat(health, damage) {
    let hp = health - damage
    if (hp < 0)
      return 0
    return hp
  }