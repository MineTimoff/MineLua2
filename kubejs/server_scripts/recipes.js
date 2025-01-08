ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:map' })
    event.shaped(
        Item.of('minecraft:map', 1),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'minecraft:paper',
          B: 'minecraft:compass'
        }
      )
      .keepIngredient({item: 'minecraft:compass'})
      event.remove({ id: 'gtceu:assembler/map' })
      event.recipes.gtceu.assembler('gtceu:assembler/map')
        .itemInputs(
            '4x minecraft:paper'
        )
        .itemOutputs(
            'minecraft:map'
        )
        .duration(100)
        .EUt(7)
        .notConsumable('minecraft:compass')
})