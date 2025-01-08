ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('gtceu:circuits/zpm', 'kubejs:solar_processor')
    event.add('gtceu:circuits/uv', 'kubejs:solar_processor_assembly')
    event.add('gtceu:circuits/uhv', 'kubejs:solar_processor_supercomputer')
    event.add('gtceu:circuits/uev', 'kubejs:solar_processor_mainframe')
  })