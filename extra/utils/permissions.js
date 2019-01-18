const GETUSERS = 'getUsers';
const HEADTRAINER = 'head-trainer';
const TRAINEE = 'trainee';
const TRAINER = 'trainer';

let permissions = {
    'getUsers': {
    all: [HEADTRAINER],
    read : [TRAINEE, TRAINER],
    write : [TRAINER],
    delete: [],
    }
}
    console.log ( hasPermission( 'getUsers', TRAINEE, 'read' ) );
      function hasPermission( moduleName, role, permissionType ){
      if( permissions.hasOwnProperty( moduleName ) ) {
        if( permissions[ moduleName ][ 'all' ].includes( role )) {
            return true;
        } 
        else if ( permissions[ moduleName ][ permissionType ].includes( role ) ) {
            return true;
        }
       else {
           return false;
       }
    }
   else {
        console.log( "Invalid module name" );
    }
}