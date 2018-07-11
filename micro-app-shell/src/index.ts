const apps = [
  {
    name: 'micro-app-a',
    url: "http://localhost:8081/micro-app-a.js",
    element: 'micro-app-a'
  },
  {
    name: 'micro-app-e',
    url: 'http://localhost:8085/micro-app-e.js',
    element: 'micro-app-e'
  }
];

const loadedApps: Array<string> = new Array<string>();

const loadApp = (app: IApp) => {
  debugger;
  delete ( window as any )[ "webpackJsonp" ];
  let content = document.getElementById( "micro-app" ) as HTMLDivElement;
  
  while ( content.firstChild ) { 
    content.removeChild( content.firstChild );
  }

  if ( loadedApps.indexOf( app.element ) < 0 ) {
    const script = document.createElement( "script" );
    script.id = app.element;
    script.onerror = () => console.error( `error loading micro-app ${ app.url }` );
    script.onload = () => {
      loadedApps.push( script.id );
      const element = document.createElement( app.element );
      if ( content )
        content.appendChild( element );
      const titleElement = document.getElementById( 'title' ) as HTMLSpanElement;
      titleElement.innerText = app.name;
    };
    script.src = app.url;
    if ( content )
      content.appendChild( script );
  }
  else {
    const element = document.createElement( app.element );
    if ( content ) content.appendChild( element );    
  }
};

( window as any ).onNavigationClick = ( event: any ) => {
  event.preventDefault();
  loadApp( event.srcElement.dataset );
};

const doBootstrap = () => {
  if ( !( window as any )[ 'Zone' ] ) {
    var url = "https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.8.26/zone.min.js";
    let content = document.getElementsByTagName( "body" )[ 0 ];
    const script = document.createElement( "script" );
    script.onerror = () => console.error( `error loading zone.js library ${ url }` );
    script.onload = () => {
      loadApp( apps[ 0 ] );
    };
    script.src = url;
    if ( content )
      content.appendChild( script );
  }  
};

doBootstrap();

interface IApp {
  url: string;
  element: string;
  name: string;
}
