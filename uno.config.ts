import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives
} from "unocss";
import presetAutoprefixer from 'unocss-preset-autoprefixer'

export default defineConfig({
    content: {
        filesystem: ["./src/**/*.{html,twig,js,ts}"],
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            extraProperties: {
                "display": "inline-block",
                "vertical-align": "middle",
            },
        }),
        presetAutoprefixer(),
    ],
    transformers: [
        transformerDirectives(),
    ]
})