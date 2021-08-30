var controller: number = 0; //-> This is going to be used as a controller for the examples, change this value as listed bellow:
/*  
    1 -> enable let message example
    2 -> enable var message example
    3 -> enable const message example
*/

//Let variables are BLOCK and FUNCTION variables, not GLOBAL and CAN BE REASSIGNED
//Exemples are listed below:

if (controller == 1) {

    console.log('Testing the let variable\n');
    function testLet() { //-> this will acuse an error because it also exists at the JavaScript File, just ignore it

        if (true) {
            var insideMessageVar: string = 'I am a function var message, ignore me for now';
            let insideMessageLet = 'I am a block let message';
            console.log(insideMessageLet);
        }
        
        console.log(insideMessageVar);
        //console.log(insideMessageLet); -> This will return a error, and TypeScript wouldn't allow the conversion to JS without specific treatment
        //                                  but it is totally possible in JavaScript alone
    }
    testLet();
    console.log('\n');
    
}

//Var variables are GLOBAL and FUNCTION variables, not BLOCK and CAN BE REASSIGNED
//Exemples are listed below:
    
else if (controller == 2) {
    
    console.log('Testing the var variable\n');
    function testVar() { //-> this will acuse an error because it also exists at the JavaScript File, just ignore it

        if (true) {
            var insideBlockMessageVar: string = 'I am a function var message, inside an if block'
            console.log(insideBlockMessageVar);
        }

        console.log(insideBlockMessageVar);
    }
    testVar();
    console.log('\n');
    
}

//Const variables are FUNCTION and BLOCK variables, not GLOBAL and CANNOT BE REASSIGNED
//Exemples are listed below:
    
else if (controller == 3) {
    
    console.log('Testing the const variable\n');
    function testConst() { //-> this will acuse an error because it also exists at the JavaScript File, just ignore it

        if (true) {
            const insideBlockMessageConst: string = 'I am a block const message'
            console.log(insideBlockMessageConst);
        }

        //console.log(insideBlockMessageConst); -> This will return a error, and TypeScript wouldn't allow the conversion to JS without specific treatment
        //                                      but it is totally possible in JavaScript alone
    }
    testConst();
    console.log('\n');
    
}