/**
 * https://leetcode.com/problems/asteroid-collision/
 */
export function asteroidCollision(asteroids: number[]): number[] {
  const asteroidsStack: number[] = []

  for (let index = 0; index < asteroids.length; index++) {
    const asteroid = asteroids[index]
    let asteroidDestroyed = false
    let lastAsteroid = asteroidsStack[asteroidsStack.length - 1]

    while (
      asteroidsStack.length &&
      asteroid < 0 &&
      lastAsteroid > 0
    ) {
      if (-asteroid >= lastAsteroid) {
        asteroidsStack.pop()

        if (-asteroid === lastAsteroid) {
          asteroidDestroyed = true
          break
        }
      } else {
        asteroidDestroyed = true
        break
      }

      lastAsteroid = asteroidsStack[asteroidsStack.length - 1]
    }

    if (!asteroidDestroyed) {
      asteroidsStack.push(asteroid)
    }
  }

  return asteroidsStack
}
