# Automated test: build and run Menu, save output to test-output.txt
npx tsc

$input = @"
1
100
123
1
Teste
1000
2
3
100
4
100
321
2
Teste2
2000
3
100
5
100
2
9
"@

# Run compiled JS
$input | node build/util/Menu.js > test-output.txt
Write-Host "Test finished. Output saved to test-output.txt"
$input = @"
1
100
123
1
Teste
1000
2
3
100
4
100
321
2
Teste2
2000
3
100
5
100
2
9
"@

$input | npx ts-node src/util/Menu.ts | Tee-Object -FilePath test-output.txt
Write-Host "Test output saved to test-output.txt"
