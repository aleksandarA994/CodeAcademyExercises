import {Renderer} from './presentation-layer/artist-render.js';

function main() {
    var renderer = new Renderer();
    renderer.init("Lady Gaga");

    moment.locale('mk');
}

main();