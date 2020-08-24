logoAnimation();
function logoAnimation() {
    var img = document.querySelector('a.logo img'),
        logo = img.parentElement;
    
    var layerText = document.createElement('img');
        layerText.classList.add('layer', 'text');
        layerText.src = 'https://raw.githubusercontent.com/vertexofvortex/customcorp/master/images/animatedlogo/text.png';
        layerText.style.cssText = 'height: unset; width: unset';
    var layerSteeve = document.createElement('img');
        layerSteeve.classList.add('layer', 'steeve');
        layerSteeve.src = 'https://raw.githubusercontent.com/vertexofvortex/customcorp/master/images/animatedlogo/steeve.png';
        layerSteeve.style.cssText = 'height: unset; width: unset';
    var layerAlex = document.createElement('img');
        layerAlex.classList.add('layer', 'alex');
        layerAlex.src = 'https://raw.githubusercontent.com/vertexofvortex/customcorp/master/images/animatedlogo/alex.png';
        layerAlex.style.cssText = 'height: unset; width: unset';
    
    img.remove();
    logo.appendChild(layerText);
    logo.appendChild(layerSteeve);
    logo.appendChild(layerAlex);
}
