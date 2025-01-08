GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('moonstone')
        .targets('ad_astra:moon_stone') // [*] 
        .dimensions('ad_astra:moon') // [*]
})