BlockEvents.modification(event => {
    event.modify('#forge:ores_in_ground/moonstone', block => {
      block.hasCollision = true
    })
  })