let permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}
    console.log ( hasPermission( 'getUsers', 'trainee', 'read' ) );
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