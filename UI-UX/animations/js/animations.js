const vertLine = new mojs.Burst({
    count:    3,
    radius:   0,
    degree:   0,
    y:        100,
    
    children: {
      shape:        'line',
      stroke:       [ '#FC2D79', '#11CDC5', 'white'],
      duration:     400,
      scale:        1,
      radius:       35,
      radiusX:      { 0: 35 },
      strokeWidth:  3,
      duration:     800,
      delay:        'stagger(125)',
    }
  });
  
  const horLine = new mojs.Burst({
    count:    3,
    radius:   0,
    degree:   0,
    angle:    270,
    y:        100,
    x:        0,
    
    children: {
      shape:        'polygon',
      stroke:       [ '#FC2D79', '#11CDC5', 'white'],
      fill:         'none',
      duration:     400,
      scale:        1.25,
      radius:       60,
      radiusX:      { 0: 60 },
      strokeWidth:  3,
      duration:     800,
      delay:        'stagger(800, 125)',
    }
  });
  
  
  const o = new mojs.Burst({
    count:    3,
    radius:   0,
    degree:   0,
    y:        100,
  
    children: {
      stroke:       [ '#FC2D79', '#11CDC5', 'white'],
      fill:         'none',
      duration:     400,
      scale:        1,
      radius:       35,
      radiusY:      { 0: 35 },
      strokeWidth:  3,
      duration:     800,
      delay:        'stagger(600, 125)',
    }
  });
  
  const timeline = new mojs.Timeline;
  
  timeline
    .add( o, vertLine, horLine );
  
  new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });
  
  // new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });

  document.getElementById("anim").innerHTML = MojsPlayer;