GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:custom_vein", vein => {
        // Basic vein generation properties
        vein.weight(200) // [*] 
        vein.clusterSize(40) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("moonstone") //
        vein.dimensions("ad_astra:moon") // 
        vein.biomes("ad_astra:lunar_wastelands") //

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeTriangle(10, 50) //

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).block(() => Block.getBlock('ad_astra:moon_desh_ore')).size(1, 1))
                .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:oak_log')).size(1, 1))
            )
        ) // [*] 

        // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cobalt) // [*] 
            .placement("above") // 
            .density(0.4)
            .radius(5)
        ) // 
    })
})