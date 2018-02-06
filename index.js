/*process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === 'exit') {
            //console.log(process.versions);
            process.stdout.write('Quitting app!\n');
            process.exit();

        } else {
            process.stderr.write('Wrong instruction!\n');


        }
    }
});*/
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        switch (instruction) {
            case 'pokaz':
                console.log(process.env);
                process.exit();
                break;
            case 'kliknij':

                console.log(process.versions);
                process.exit();
                break;
            default:
                console.log(global);
                process.exit();

        };
    }
});
