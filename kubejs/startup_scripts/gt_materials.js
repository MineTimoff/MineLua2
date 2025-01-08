GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("desh")
        .ingot()
        .ore()
        .color(0xe67c19).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
})