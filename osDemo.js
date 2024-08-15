import os, { cpus } from 'os';

    console.log(os.userInfo().username);
    console.log(os.userInfo().uid);
    console.log(os.userInfo().homedir);


    // TotalMemory
    console.log(os.totalmem());

    // free mem
    console.log(os.freemem());

    // cpus
    console.log(os.cpus());