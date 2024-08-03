import twig from '@vituum/vite-plugin-twig'
import UnoCSS from 'unocss/vite'
import vituum from 'vituum'

export default {
    plugins: [
        UnoCSS(),
        vituum(), 
        twig({
            root: './src',
            formats: ['twig', 'html', '.html.twig'],
        })
    ]
}