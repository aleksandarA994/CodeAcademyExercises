function main() {    
       
    var socialNetwork = new SocialNetwork();
    var renderer = new PageRenderer(socialNetwork.users[10]); 
    renderer.renderAll();
    
}
main();