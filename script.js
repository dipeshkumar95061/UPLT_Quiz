const questionsDB = [
 // Number Systems
{ category: "Number Systems", question: "What is the decimal value of binary 1010?", options: ["8", "10", "12", "15"], answer: "10", explanation: "Binary 1010 = 8+0+2+0 = 10" },
{ category: "Number Systems", question: "What is the hexadecimal value of decimal 15?", options: ["F","E","D","C"], answer: "F", explanation: "15 decimal = F hex" },
{ category: "Number Systems", question: "What is the BCD code of decimal 9?", options: ["1001","1000","1010","0111"], answer: "1001", explanation: "9 decimal = 1001 BCD" },
{ category: "Number Systems", question: "What is the decimal value of octal 31?", options: ["25","26","24","23"], answer: "25", explanation: "Octal 31 = 25 decimal" },
{ category: "Number Systems", question: "What is the decimal value of binary 111111?", options: ["62", "63", "61", "64"], answer: "63", explanation: "111111 = 32+16+8+4+2+1 = 63" },
{ category: "Number Systems", question: "What is the Excess-3 code of decimal 5?", options: ["1000","0101","1010","0011"], answer: "1000", explanation: "Excess-3 = decimal + 3 = 5+3=8 → 1000" },
{ category: "Number Systems", question: "What is the Gray code of binary 1001?", options: ["1101","1100","1011","1010"], answer: "1101", explanation: "Binary to Gray conversion" },
{ category: "Number Systems", question: "What is the hexadecimal value of decimal 100?", options: ["64","65","63","62"], answer: "64", explanation: "100 decimal = 64 hex" },
{ category: "Number Systems", question: "What is the 1's complement of binary 1010?", options: ["0101","1010","0110","1001"], answer: "0101", explanation: "1's complement = invert all bits" },
{ category: "Number Systems", question: "What is the octal value of decimal 8?", options: ["10","11","12","7"], answer: "10", explanation: "8 decimal = 10 octal" },
{ category: "Number Systems", question: "What is the decimal value of binary 111100?", options: ["60", "61", "62", "63"], answer: "60", explanation: "111100 = 32+16+8+4 = 60" },
{ category: "Number Systems", question: "What is the BCD code of decimal 15?", options: ["0001 0101","0001 1111","0010 0101","0011 0100"], answer: "0001 0101", explanation: "15 decimal = 0001 0101 BCD" },
{ category: "Number Systems", question: "What is the decimal value of hexadecimal 'FF'?", options: ["255","254","256","253"], answer: "255", explanation: "FF hex = 255 decimal" },
{ category: "Number Systems", question: "What is the 2's complement of binary 1101?", options: ["0011","0010","1101","0101"], answer: "0011", explanation: "2's complement = 1's complement +1" },
{ category: "Number Systems", question: "What is the octal value of decimal 64?", options: ["100","101","110","77"], answer: "100", explanation: "64 decimal = 100 octal" },
{ category: "Number Systems", question: "What is the decimal value of octal 256?", options: ["174","175","176","177"], answer: "174", explanation: "Octal 256 = 2*64+5*8+6=174" },
{ category: "Number Systems", question: "What is the Gray code of binary 0110?", options: ["0101","0100","0111","0110"], answer: "0101", explanation: "Binary 0110 → Gray 0101" },
{ category: "Number Systems", question: "What is the result of Binary 101 + 011?", options: ["1000","110","111","1010"], answer: "1000", explanation: "101+011=8 decimal=1000 binary" },
{ category: "Number Systems", question: "What is the 8421 code of decimal 3?", options: ["0011","0100","0110","0010"], answer: "0011", explanation: "8421 code" },
{ category: "Number Systems", question: "What is the 1's complement of binary 0011?", options: ["1100","0011","1110","1001"], answer: "1100", explanation: "1's complement = invert bits" },
{ category: "Number Systems", question: "What is the decimal value of hexadecimal '2F'?", options: ["47","46","48","49"], answer: "47", explanation: "2F hex = 47 decimal" },
{ category: "Number Systems", question: "What is the decimal value of octal 77?", options: ["63","62","64","61"], answer: "63", explanation: "Octal 77 = 7*8+7=63" },
{ category: "Number Systems", question: "What is the BCD code of decimal 12?", options: ["0001 0010","0010 0100","0011 0001","0001 0011"], answer: "0001 0010", explanation: "12 decimal = 0001 0010 BCD" },
{ category: "Number Systems", question: "What is the decimal value of binary 11010?", options: ["24", "26", "28", "22"], answer: "26", explanation: "11010 = 16+8+0+2+0 = 26" },
{ category: "Number Systems", question: "What is the decimal value of hexadecimal '1F'?", options: ["31","30","32","33"], answer: "31", explanation: "Hex 1F = 31 decimal" },
{ category: "Number Systems", question: "What is the decimal value of binary 101101?", options: ["45", "43", "41", "47"], answer: "45", explanation: "101101 = 32+0+8+4+0+1 = 45" },
{ category: "Number Systems", question: "What is the 8421 code of decimal 7?", options: ["0111","1110","1000","1011"], answer: "0111", explanation: "7 decimal = 0111 in 8421 code" },
{ category: "Number Systems", question: "What is the decimal value of binary 100000?", options: ["32", "31", "33", "30"], answer: "32", explanation: "100000 = 32" },
{ category: "Number Systems", question: "What is the BCD code of decimal 11?", options: ["0001 0001","0001 1011","0001 0011","0010 0001"], answer: "0001 0001", explanation: "11 decimal = 0001 0001 BCD" },
{ category: "Number Systems", question: "What is the 2's complement of binary 1001?", options: ["0111","0110","1001","0101"], answer: "0111", explanation: "2's complement = 1's complement +1" },
{ category: "Number Systems", question: "What is the decimal value of binary 100111?", options: ["38", "39", "40", "41"], answer: "39", explanation: "100111 = 32+0+0+4+2+1 = 39" },
{ category: "Number Systems", question: "What is the Gray code of binary 1100?", options: ["1010","1110","1000","1100"], answer: "1010", explanation: "Gray code conversion formula applied" },
{ category: "Number Systems", question: "What is the 2's complement of binary 0101?", options: ["1011","1010","0101","1001"], answer: "1011", explanation: "2's complement = 1's complement +1" },
{ category: "Number Systems", question: "What is the decimal value of hexadecimal '10'?", options: ["16","15","17","18"], answer: "16", explanation: "Hex 10 = 16 decimal" },
{ category: "Number Systems", question: "What is the decimal value of binary 1111?", options: ["14", "15", "16", "13"], answer: "15", explanation: "1111 = 8+4+2+1 = 15" },
// Number Systems - Advanced & Tricky Questions
{ category: "Number Systems", question: "What is the 8-bit 2's complement representation of decimal -18?", options: ["11101110","11101101","11101111","11110010"], answer: "11101110", explanation: "-18 in 8-bit: 18 = 00010010 → 1's complement = 11101101 → +1 = 11101110" },
{ category: "Number Systems", question: "What decimal value does the 8-bit 2's complement number 11110111 represent?", options: ["-9","-8","-7","-5"], answer: "-9", explanation: "11110111 → Invert = 00001000 → +1 = 00001001 = 9 → Negative = -9" },
{ category: "Number Systems", question: "What is the range of values in 8-bit signed 2's complement?", options: ["-128 to +127","-127 to +128","-255 to +255","0 to 255"], answer: "-128 to +127", explanation: "2's complement 8-bit range is -2^7 to (2^7 - 1)" },
{ category: "Number Systems", question: "Convert decimal -25 to 8-bit sign-magnitude form.", options: ["10011001","11100111","10011011","01100101"], answer: "10011001", explanation: "-25 → magnitude = 25 = 00011001 → sign bit = 1 → 10011001" },
{ category: "Number Systems", question: "Convert binary 101101 (base 2) to base 5.", options: ["41","42","43","44"], answer: "42", explanation: "101101 (binary) = 45 (decimal) → base 5 = 42" },
{ category: "Number Systems", question: "Convert hexadecimal '2A' to octal.", options: ["52","51","53","54"], answer: "52", explanation: "2A hex = 42 decimal → octal = 52" },
{ category: "Number Systems", question: "What is the binary representation of 23.25 (decimal)?", options: ["10111.01","10110.10","10111.10","10101.01"], answer: "10111.01", explanation: "23 = 10111, 0.25 = 0.01 → 23.25 = 10111.01" },
{ category: "Number Systems", question: "What is the normalized binary form of 13.5 (decimal)?", options: ["1.10111 × 2^3","1.1011 × 2^3","1.1010 × 2^3","1.1100 × 2^3"], answer: "1.1011 × 2^3", explanation: "13.5 = 1101.1 → normalized = 1.1011 × 2^3" },
{ category: "Number Systems", question: "What is the hexadecimal value of binary 110110111011?", options: ["DBB","DB7","6DB","DDB"], answer: "DBB", explanation: "110110111011 → group in 4 bits → 1101 1011 1011 = DBB hex" },
{ category: "Number Systems", question: "Which decimal value does IEEE 754 (32-bit) binary 0 10000011 01000000000000000000000 represent?", options: ["10.0","12.0","13.0","11.0"], answer: "10.0", explanation: "Sign=0, Exponent=131-127=4, Mantissa=1.0100... = 1.25 × 2^3 = 10.0" },
{ category: "Number Systems", question: "Convert octal 745 to hexadecimal.", options: ["1ED","1F5","1E9","1EC"], answer: "1ED", explanation: "745 octal = 485 decimal → hex = 1ED" },
{ category: "Number Systems", question: "What is the decimal equivalent of Gray code 1011?", options: ["15","12","14","13"], answer: "14", explanation: "Gray 1011 → Binary = 1110 → Decimal = 14" },
{ category: "Number Systems", question: "Convert decimal 0.625 into binary.", options: ["0.110","0.101","0.111","0.100"], answer: "0.101", explanation: "0.625 × 2 = 1.25 → 1; 0.25 × 2 = 0.5 → 0; 0.5 × 2 = 1 → 0.101" },
{ category: "Number Systems", question: "What is the decimal value of signed magnitude binary 11101010 (8-bit)?", options: ["-106","-117","-90","-102"], answer: "-106", explanation: "Sign=1 → negative, magnitude=01101010=106 → -106" },
{ category: "Number Systems", question: "Convert binary fraction 0.1011 into decimal.", options: ["0.6875","0.625","0.75","0.8125"], answer: "0.6875", explanation: "0.1011 = 1/2 + 0/4 + 1/8 + 1/16 = 0.5+0+0.125+0.0625 = 0.6875" },
{ category: "Number Systems", question: "Convert decimal 255 to base 7.", options: ["513","514","520","522"], answer: "513", explanation: "255 ÷ 7 = 36 R3, 36 ÷ 7 = 5 R1, 5 ÷ 7 = 0 R5 → 513 base 7" },
// Number Systems - UPLT Focused Questions
{ category: "Number Systems", question: "What is the range of values in 10-bit 2's complement representation?", options: ["-512 to +511","-511 to +512","-1024 to +1023","0 to 1023"], answer: "-512 to +511", explanation: "Range = -2^(n-1) to (2^(n-1)-1) for n bits" },
{ category: "Number Systems", question: "How many distinct values can be represented using 6-bit binary?", options: ["64","63","62","65"], answer: "64", explanation: "n-bit binary can represent 2^n distinct values" },
{ category: "Number Systems", question: "What is the decimal equivalent of (110101)₂ + (1011)₂?", options: ["64","58","62","54"], answer: "62", explanation: "110101=53, 1011=11 → 53+11=64 (check carefully)" },
{ category: "Number Systems", question: "Which of the following is NOT a self-complementing code?", options: ["Excess-3","8421","2421","5211"], answer: "8421", explanation: "Self-complementing → 9’s complement obtained by bit complement" },
{ category: "Number Systems", question: "What is the decimal value of 2’s complement number 11110000 (8-bit)?", options: ["-16","-15","-14","-17"], answer: "-16", explanation: "11110000 → invert=00001111 → +1=00010000=16 → negative → -16" },
{ category: "Number Systems", question: "Which code is used in digital calculators?", options: ["BCD","Excess-3","Gray","ASCII"], answer: "BCD", explanation: "Calculators internally use BCD representation" },
{ category: "Number Systems", question: "How many bits are required to represent decimal 999 in binary?", options: ["9","10","11","12"], answer: "10", explanation: "999 < 2^10 (1024), needs 10 bits" },
{ category: "Number Systems", question: "What is the decimal equivalent of Gray code 1000?", options: ["12","8","15","7"], answer: "15", explanation: "Gray 1000 → Binary = 1111 → Decimal = 15" },
{ category: "Number Systems", question: "Which number system is NOT positional?", options: ["Roman","Binary","Decimal","Octal"], answer: "Roman", explanation: "Roman numeral system is non-positional" },
{ category: "Number Systems", question: "What happens when adding two positive numbers in 2’s complement results in a negative?", options: ["Overflow","Underflow","Wrap around","Truncation"], answer: "Overflow", explanation: "Sign bit changes unexpectedly → overflow" },
{ category: "Number Systems", question: "Which of the following is an alphanumeric code?", options: ["ASCII","Excess-3","Gray","BCD"], answer: "ASCII", explanation: "ASCII represents letters, digits, and symbols" },
{ category: "Number Systems", question: "What is the base of the hexadecimal system?", options: ["8","10","12","16"], answer: "16", explanation: "Hexadecimal is base-16" },
{ category: "Number Systems", question: "The 1's complement of (100000)₂ is:", options: ["011111","111111","100001","000000"], answer: "011111", explanation: "Invert each bit → 100000 → 011111" },
{ category: "Number Systems", question: "Which representation is used for fractional numbers in digital computers?", options: ["Floating point","BCD","Gray","Octal"], answer: "Floating point", explanation: "Fractions and very large/small numbers are stored as floating-point" },
{ category: "Number Systems", question: "Which error occurs when the result of arithmetic exceeds the maximum representable value?", options: ["Overflow","Underflow","Rounding error","Truncation error"], answer: "Overflow", explanation: "Overflow occurs when result is outside representable range" },

  // Boolean Algebra
// 1-20
{ category: "Boolean Algebra", question: "What does De Morgan's theorem state?", options: ["(A+B)' = A'B'", "(AB)' = A'+B'", "A+B = AB'", "None"], answer: "(A+B)' = A'B'", explanation: "De Morgan: (A+B)' = A'B' and (AB)' = A'+B'" },
{ category: "Boolean Algebra", question: "Simplify: AB + A'B + AB'", options: ["A + B", "A + B'", "AB", "1"], answer: "A + B", explanation: "Consensus theorem: AB + A'B + AB' = A + B" },
{ category: "Boolean Algebra", question: "Is A + AB = A?", options: ["Yes", "No"], answer: "Yes", explanation: "Absorption Law: A + AB = A" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A + B')", options: ["A", "B", "A+B", "B'"], answer: "A", explanation: "(A + B)(A + B') = A" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + C)", options: ["AC + A'B", "A + B + C", "AB + AC", "A' + B + C"], answer: "AC + A'B", explanation: "Distribute and apply Boolean rules" },
{ category: "Boolean Algebra", question: "Simplify the Boolean expression: A + AB", options: ["A", "B", "AB", "A+B"], answer: "A", explanation: "A + AB = A(1+B) = A" },
{ category: "Boolean Algebra", question: "Simplify: (A + B + C)'", options: ["A'B'C'", "AB'C'", "A'B'C", "ABC"], answer: "A'B'C'", explanation: "De Morgan: invert all terms and AND" },
{ category: "Boolean Algebra", question: "Simplify: AB + A'B", options: ["B", "A", "AB", "A+B"], answer: "B", explanation: "AB + A'B = B(A+A') = B" },
{ category: "Boolean Algebra", question: "Simplify using De Morgan: (A + B + C)'", options: ["A'B'C'", "AB'C'", "A'B'C", "ABC"], answer: "A'B'C'", explanation: "Invert all terms and AND" },
{ category: "Boolean Algebra", question: "Is A * A' = 0?", options: ["Yes", "No"], answer: "Yes", explanation: "Complement Law: A * A' = 0" },
{ category: "Boolean Algebra", question: "Simplify: AB + AB'", options: ["A", "B", "AB", "B'"], answer: "A", explanation: "AB + AB' = A(B+B') = A" },
{ category: "Boolean Algebra", question: "Simplify: (A' + B)(A + B')", options: ["AB + A'B'", "A + B", "A'B + AB'", "A' + B'"], answer: "AB + A'B'", explanation: "Equivalent to XOR function" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(B + C)(A + C)", options: ["AB + AC + BC", "A+B+C", "A", "B"], answer: "AB + AC + BC", explanation: "Consensus theorem applied" },
{ category: "Boolean Algebra", question: "Simplify the Boolean expression: A + A'B", options: ["A+B", "B", "A", "AB"], answer: "A+B", explanation: "A + A'B = (A+B)" },
{ category: "Boolean Algebra", question: "Is A + A' = 1?", options: ["Yes", "No"], answer: "Yes", explanation: "Complement Law: A + A' = 1" },
{ category: "Boolean Algebra", question: "Simplify: A(B + C)", options: ["AB + AC", "A + B + C", "ABC", "A + BC"], answer: "AB + AC", explanation: "Distributive law: A(B+C) = AB + AC" },
{ category: "Boolean Algebra", question: "Simplify: (AB)'", options: ["A'+B'", "(A+B)'", "A'B'", "AB"], answer: "A'+B'", explanation: "De Morgan: (AB)' = A' + B'" },
{ category: "Boolean Algebra", question: "Simplify: (A ⊕ B) ⊕ B", options: ["A", "B", "A ⊕ B", "0"], answer: "A", explanation: "XOR is associative: (A⊕B)⊕B = A" },
{ category: "Boolean Algebra", question: "SOP form of F = Σm(1,3,5)", options: ["A'B + AB' + ...", "A+B+C", "AB + AC + BC", "1"], answer: "A'B + AB' + ...", explanation: "Sum of Products: use minterms" },
{ category: "Boolean Algebra", question: "Simplify: (A' + B)(B' + C)", options: ["A'C + B'B", "A'C + B'C", "A'B + BC", "A'B + AC"], answer: "A'C + B'C", explanation: "Distributive law applied" },

// 21-40
{ category: "Boolean Algebra", question: "Simplify: A + AB + AC", options: ["A", "AB + AC", "A + B + C", "AC + AB"], answer: "A", explanation: "A + AB + AC = A(1+B+C) = A" },
{ category: "Boolean Algebra", question: "Simplify: AB + A'B", options: ["B", "A", "AB", "A+B"], answer: "B", explanation: "AB + A'B = B(A+A') = B" },
{ category: "Boolean Algebra", question: "Simplify: A + A'B + AB'", options: ["A + B", "B", "A", "1"], answer: "A + B", explanation: "Combine using distributive law" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + C)", options: ["AC + A'B", "A + B + C", "AB + AC", "A' + B + C"], answer: "AC + A'B", explanation: "Distribute and apply Boolean rules" },
{ category: "Boolean Algebra", question: "Simplify: AB + AB' + A'B", options: ["A + B", "B", "A", "1"], answer: "A + B", explanation: "Consensus theorem: AB + AB' + A'B = A + B" },
{ category: "Boolean Algebra", question: "Simplify: (A + B')(A' + B)", options: ["A'B' + AB", "A+B", "A'B + AB'", "A + B'"], answer: "A'B' + AB", explanation: "Apply distributive law and simplify" },
{ category: "Boolean Algebra", question: "Simplify: A + A'BC", options: ["A + BC", "A + B + C", "AC", "A"], answer: "A + BC", explanation: "A + A'BC = (A + B)(A + C) = A + BC" },
{ category: "Boolean Algebra", question: "Simplify: AB + A'C + BC", options: ["AB + A'C + BC", "A + B + C", "AC + B", "1"], answer: "AB + A'C + BC", explanation: "No further simplification possible" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(B + C)(A + C)", options: ["AB + AC + BC", "A + B + C", "A", "B"], answer: "AB + AC + BC", explanation: "Apply distributive law and combine terms" },
{ category: "Boolean Algebra", question: "Simplify: (A + B + C)'", options: ["A'B'C'", "AB'C'", "A'B'C", "ABC"], answer: "A'B'C'", explanation: "De Morgan: invert all terms and AND" },

// 41-60
{ category: "Boolean Algebra", question: "Simplify: (AB')'", options: ["A'+B", "AB", "A'B'", "A+B'"], answer: "A'+B", explanation: "(AB')' = A' + B (De Morgan)" },
{ category: "Boolean Algebra", question: "Simplify: (A'+B')'", options: ["A+B", "AB", "A'+B", "A+B'"], answer: "A+B", explanation: "(A'+B')' = A+B (De Morgan)" },
{ category: "Boolean Algebra", question: "Simplify: (A'B)'", options: ["A+B'", "A'+B", "AB'", "A+B"], answer: "A+B", explanation: "(A'B)' = A + B" },
{ category: "Boolean Algebra", question: "Simplify: (AB + AC)'", options: ["A' + B'C'", "A' + B + C", "A + B'C'", "A'B' + A'C'"], answer: "A' + B'C'", explanation: "De Morgan applied" },
{ category: "Boolean Algebra", question: "Simplify: (A' + B)(A + B')", options: ["AB + A'B'", "A + B", "A'B + AB'", "A' + B'"], answer: "AB + A'B'", explanation: "XOR equivalence" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + B')", options: ["A'B + AB'", "A+B", "AB+ A'B'", "A' + B'"], answer: "A'B + AB'", explanation: "XOR equivalence" },
{ category: "Boolean Algebra", question: "Simplify: (A' + B)(B' + C)", options: ["A'C + B'B", "A'C + B'C", "A'B + BC", "A'B + AC"], answer: "A'C + B'C", explanation: "Distributive law applied" },
{ category: "Boolean Algebra", question: "Simplify: A + 0", options: ["A", "0", "1", "A'"], answer: "A", explanation: "Identity law: A + 0 = A" },
{ category: "Boolean Algebra", question: "Simplify: A * 1", options: ["A", "0", "1", "A'"], answer: "A", explanation: "Identity law: A*1 = A" },
{ category: "Boolean Algebra", question: "Simplify: A + 1", options: ["1", "0", "A", "A'"], answer: "1", explanation: "Null law: A + 1 = 1" },

// 61-80
{ category: "Boolean Algebra", question: "Simplify: A * 0", options: ["0", "1", "A", "A'"], answer: "0", explanation: "Null law: A*0=0" },
{ category: "Boolean Algebra", question: "Simplify: A + AB", options: ["A", "AB", "B", "A+B"], answer: "A", explanation: "Absorption law: A + AB = A" },
{ category: "Boolean Algebra", question: "Simplify: A(A + B)", options: ["A", "AB", "B", "A+B"], answer: "A", explanation: "Absorption law: A(A+B)=A" },
{ category: "Boolean Algebra", question: "Simplify: A(B + C)", options: ["AB + AC", "A + B + C", "A + BC", "AB + C"], answer: "AB + AC", explanation: "Distributive law: A(B+C) = AB + AC" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A + C)", options: ["A + BC", "AB + AC", "A + B + C", "A + C"], answer: "A + BC", explanation: "Distributive law: (A+B)(A+C) = A + BC" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(C + D)", options: ["AC + AD + BC + BD", "A + B + C + D", "AB + CD", "A(C+D) + B(C+D)"], answer: "AC + AD + BC + BD", explanation: "Distributive law: multiply each term" },
// 81-100
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + C)(B + C')", options: ["AC + B'C'", "AB + AC", "A + B + C", "1"], answer: "AC + B'C'", explanation: "Apply distributive and absorption laws" },
{ category: "Boolean Algebra", question: "Simplify: A + A'B + AC", options: ["A + B", "A + C", "B + C", "A"], answer: "A + B", explanation: "Consensus theorem: A + A'B + AC = A + B" },
{ category: "Boolean Algebra", question: "Simplify: A ⊕ 0", options: ["A", "0", "1", "A'"], answer: "A", explanation: "XOR with 0: A ⊕ 0 = A" },
{ category: "Boolean Algebra", question: "Simplify: A ⊕ 1", options: ["A'", "A", "1", "0"], answer: "A'", explanation: "XOR with 1: A ⊕ 1 = A'" },
{ category: "Boolean Algebra", question: "Simplify: A ⊕ A", options: ["0", "1", "A", "A'"], answer: "0", explanation: "XOR of same variable: A ⊕ A = 0" },
{ category: "Boolean Algebra", question: "Simplify: A ⊕ B ⊕ B", options: ["A", "B", "A ⊕ B", "0"], answer: "A", explanation: "XOR is associative: A ⊕ B ⊕ B = A" },
{ category: "Boolean Algebra", question: "Simplify: (A ⊕ B)'", options: ["A ⊕ B'", "A XNOR B", "AB + A'B'", "A + B"], answer: "A XNOR B", explanation: "Complement of XOR is XNOR" },
{ category: "Boolean Algebra", question: "POS form of F = ΠM(0,2,4)", options: ["(A'+B')(A+C')...", "(A+B+C)", "(AB + AC)", "(A'+B')(A+C')"], answer: "(A'+B')(A+C')", explanation: "Product of sums: use maxterms" },
{ category: "Boolean Algebra", question: "SOP: F(A,B) = Σm(0,2)", options: ["A'B' + AB'", "AB + A'B", "A + B", "AB"], answer: "A'B' + AB'", explanation: "Combine minterms to form SOP" },
{ category: "Boolean Algebra", question: "POS: F(A,B) = ΠM(1,3)", options: ["(A + B)(A' + B')", "(A + B')(A'+B)", "(AB + A'B')", "A + B"], answer: "(A + B')(A'+B)", explanation: "Use maxterms to form POS" },
{ category: "Boolean Algebra", question: "SOP to POS: F = A'B + AB'", options: ["(A+B)(A'+B')", "(A+B')(A'+B)", "(AB+ A'B')", "A + B"], answer: "(A+B')(A'+B)", explanation: "Convert SOP to POS using duality" },
{ category: "Boolean Algebra", question: "Simplify: AB + A'B + AB'", options: ["A + B", "A + B'", "AB", "1"], answer: "A + B", explanation: "Consensus theorem: AB + A'B + AB' = A + B" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + B')(A + C)", options: ["AC + B'C'", "A + B + C", "AB + AC", "1"], answer: "AC + B'C'", explanation: "Distributive & absorption laws applied" },
{ category: "Boolean Algebra", question: "Simplify: A + AB + ABC", options: ["A", "AB", "B", "ABC"], answer: "A", explanation: "Absorption law: A + AB + ABC = A" },
{ category: "Boolean Algebra", question: "Simplify using De Morgan: (A + B + C)'", options: ["A'B'C'", "AB'C'", "A'B'C", "ABC"], answer: "A'B'C'", explanation: "Invert all terms and AND" },
{ category: "Boolean Algebra", question: "Simplify: (A ⊕ B) ⊕ B", options: ["A", "B", "A ⊕ B", "0"], answer: "A", explanation: "XOR is associative: (A⊕B)⊕B = A" },
{ category: "Boolean Algebra", question: "Simplify: (A + B + C)(A' + B)(B' + C')", options: ["AB + AC + B'C'", "A + B + C", "AB + BC + AC", "1"], answer: "AB + AC + B'C'", explanation: "Apply distributive and absorption laws" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + C)(A + B')", options: ["AC + AB'", "AB + AC", "A + B + C", "1"], answer: "AC + AB'", explanation: "Distributive and absorption laws applied" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(B + C)(A' + C')", options: ["AB + AC'", "A + B + C", "AB + AC + BC", "1"], answer: "AB + AC'", explanation: "Apply distributive and absorption laws" },
{ category: "Boolean Algebra", question: "Simplify: (A + B + C)(A + B')(A + C')", options: ["A + BC'", "A + B + C", "AB + AC'", "1"], answer: "A + BC'", explanation: "Simplify using distributive and absorption laws" },
{ category: "Boolean Algebra", question: "Simplify: (A ⊕ B) + (A ⊕ B)'", options: ["1", "0", "A", "B"], answer: "1", explanation: "A XOR B plus its complement = 1" },
{ category: "Boolean Algebra", question: "Simplify: (A ⊕ B)(A ⊕ B)'", options: ["0", "1", "A", "B"], answer: "0", explanation: "A XOR B AND its complement = 0" },
{ category: "Boolean Algebra", question: "Simplify: A + AB + A'B'", options: ["A + B'", "A + B", "B", "1"], answer: "A + B'", explanation: "Combine using distributive and absorption laws" },
{ category: "Boolean Algebra", question: "Simplify: AB + A'C + AC", options: ["AB + AC + A'C", "A + B + C", "AC + B", "1"], answer: "AB + AC + A'C", explanation: "No further simplification possible" },
{ category: "Boolean Algebra", question: "Simplify: (A + B')(A' + C)(B + C')", options: ["AC + B'C'", "AB + AC", "A + B + C", "1"], answer: "AC + B'C'", explanation: "Distributive and absorption laws applied" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(B + C')(A' + C)", options: ["AC + AB'", "AB + AC'", "A + B + C", "1"], answer: "AC + AB'", explanation: "Distributive and absorption laws applied" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + B)(B' + C)", options: ["AC + B'C'", "AB + AC", "A + B + C", "1"], answer: "AC + B'C'", explanation: "Distributive and absorption laws applied" },
// UPLT-focused & tricky Boolean Algebra questions
{ category: "Boolean Algebra", question: "Simplify: F = (A + B)(A' + B') + (A ⊕ B)", options: ["1", "0", "A + B", "A'B'"], answer: "1", explanation: "Expression covers all cases → always 1" },
{ category: "Boolean Algebra", question: "If F = A ⊕ B ⊕ C, then F when A=B=C=1?", options: ["1", "0", "A", "C"], answer: "1", explanation: "XOR sum of odd number of 1s = 1" },
{ category: "Boolean Algebra", question: "Simplify: F = A'B + AB' + AB", options: ["A + B'", "B + A'", "A + B", "1"], answer: "A + B", explanation: "Combine terms using consensus theorem" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(B + C)(C + A)", options: ["AB + BC + AC", "A + B + C", "A", "1"], answer: "AB + BC + AC", explanation: "Consensus theorem: (A+B)(B+C)(C+A)=AB+BC+AC" },
{ category: "Boolean Algebra", question: "If F = (A + B)(A + C)(B + C), find F'", options: ["A'B'C'", "A'B + A'C + B'C", "A' + B' + C'", "None"], answer: "A'B' + A'C' + B'C'", explanation: "Apply De Morgan's and distributive laws" },
{ category: "Boolean Algebra", question: "Find SOP form of F = ΠM(1,3,4)", options: ["A'B + AB'", "A'B'C + AB'C'", "A'B'C' + A'BC' + AB'C'", "None"], answer: "A'B'C' + A'BC' + AB'C'", explanation: "Convert maxterms to minterms for SOP" },
{ category: "Boolean Algebra", question: "Simplify: F = (A + B)(A' + B)(B + C') + A'B'", options: ["A + B'", "1", "AB + AC'", "B + C"], answer: "1", explanation: "Expression covers all combinations → always 1" },
{ category: "Boolean Algebra", question: "Simplify: F = (A ⊕ B)(A ⊕ C)", options: ["A ⊕ (B C)", "(A⊕B)(A⊕C)", "A ⊕ BC'", "A ⊕ B ⊕ C"], answer: "A ⊕ B ⊕ C", explanation: "XOR properties: (A⊕B)(A⊕C)=A⊕B⊕C" },
{ category: "Boolean Algebra", question: "Simplify: F = AB + A'C + BC'", options: ["AB + A'C + BC'", "A + B + C", "AC + B", "1"], answer: "AB + A'C + BC'", explanation: "No further simplification possible" },
{ category: "Boolean Algebra", question: "Find POS form of F = Σm(1,3,5)", options: ["(A+B)(A'+C)...", "(A+B')(A'+C)(A+B+C')", "(A+B)(A'+B)(B+C')", "(A'+B')(A+C')"], answer: "(A+B)(A'+C)(A+B+C')", explanation: "Use maxterms to form POS" },
{ category: "Boolean Algebra", question: "Simplify: F = (A' + B')(B + C')(C + A')", options: ["AB + AC + BC", "A'B' + B'C' + A'C'", "1", "0"], answer: "A'B' + B'C' + A'C'", explanation: "Consensus theorem applied" },
{ category: "Boolean Algebra", question: "If F = A ⊕ B ⊕ C, find F' when A=1, B=1, C=0?", options: ["0", "1", "A", "C"], answer: "0", explanation: "XOR of two 1s and one 0 = 0" },
{ category: "Boolean Algebra", question: "Simplify: F = AB + A'C + A'B'", options: ["A + B + C", "1", "AB + A'C + A'B'", "A'B + AC"], answer: "1", explanation: "Expression covers all possible inputs → always 1" },
{ category: "Boolean Algebra", question: "Simplify: F = (A ⊕ B)' ⊕ B", options: ["A", "B", "A'", "0"], answer: "A'", explanation: "Complement and XOR properties" },
{ category: "Boolean Algebra", question: "Simplify: F = (A + B')(B + C)(A' + C')", options: ["AC + B'C'", "A + B + C", "AB + AC'", "1"], answer: "AC + B'C'", explanation: "Distributive and absorption laws applied" },
{ category: "Boolean Algebra", question: "Simplify: F = (A ⊕ B)(A' + B')", options: ["A'B'", "AB", "A ⊕ B", "A+B"], answer: "A'B'", explanation: "XOR and AND combination simplification" },
{ category: "Boolean Algebra", question: "Simplify: F = (A + B)(A' + C) + AB", options: ["AC + AB", "A + B + C", "AB + AC + BC", "1"], answer: "AC + AB", explanation: "Distributive law and absorption applied" },
{ category: "Boolean Algebra", question: "Simplify: F = (A + B)(B + C')(A + C')", options: ["AB + AC'", "A + B + C", "AC + B'", "1"], answer: "AC + B'", explanation: "Simplify using distributive and absorption laws" },
{ category: "Boolean Algebra", question: "Simplify: F = (A + B')(A' + C)(B + C')", options: ["AC + B'C'", "AB + AC", "A + B + C", "1"], answer: "AC + B'C'", explanation: "Distributive and absorption laws applied" },
{ category: "Boolean Algebra", question: "Simplify: F = (A ⊕ B)(A ⊕ B')", options: ["A", "B", "1", "0"], answer: "0", explanation: "XOR with complement yields 0" }


  // Logic Gates
{ category: "Logic Gates", question: "What is the symbol for the OR gate?", options: ["&", "|", ">", "<"], answer: "|", explanation: "The OR gate symbol is '|'" },
{ category: "Logic Gates", question: "When is the output of an XOR gate 1?", options: ["When inputs are different", "When inputs are the same", "Always 1", "Never"], answer: "When inputs are different", explanation: "XOR outputs 1 only if inputs are different" },
{ category: "Logic Gates", question: "For a 3-input AND gate, in how many conditions will the output be 1?", options: ["1", "2", "3", "7"], answer: "1", explanation: "All 3 inputs must be 1" },
{ category: "Logic Gates", question: "Simplify: (AB)'", options: ["A' + B'", "AB", "A + B", "A'B"], answer: "A' + B'", explanation: "According to DeMorgan's law" },
{ category: "Logic Gates", question: "Implement an AND gate using only NOR gates", options: ["((A NOR A) NOR (B NOR B)) NOR ((A NOR A) NOR (B NOR B))", "A NOR B", "A NOR A", "B NOR B"], answer: "((A NOR A) NOR (B NOR B)) NOR ((A NOR A) NOR (B NOR B))", explanation: "Using double NOR gates, AND can be implemented" },
{ category: "Logic Gates", question: "What is the sum output of a half-adder?", options: ["A XOR B", "A AND B", "A OR B", "A NAND B"], answer: "A XOR B", explanation: "Half-adder sum = A XOR B" },
{ category: "Logic Gates", question: "What does the fan-out of a gate define?", options: ["Number of inputs it can drive", "Number of outputs", "Delay", "Voltage level"], answer: "Number of inputs it can drive", explanation: "Fan-out = maximum number of inputs a gate can drive without signal degradation" },
{ category: "Logic Gates", question: "When is the output of a NAND gate 0?", options: ["When both inputs are 1", "When both inputs are 0", "Never", "Always 1"], answer: "When both inputs are 1", explanation: "NAND = NOT(AND), output is 0 only when all inputs are 1" },
{ category: "Logic Gates", question: "In a 2-input XNOR gate, how many times does the output become 1?", options: ["2", "1", "3", "4"], answer: "2", explanation: "For inputs 00 and 11, output is 1" },
{ category: "Logic Gates", question: "What does the reset input of a flip-flop do?", options: ["Clears output to 0", "Sets output to 1", "Toggles output", "No effect"], answer: "Clears output to 0", explanation: "Reset forces the output to 0" },
{ category: "Logic Gates", question: "What is the purpose of a buffer gate?", options: ["Strengthen signal", "Invert signal", "Add two signals", "Reduce voltage"], answer: "Strengthen signal", explanation: "Buffer output equals input; mainly used to strengthen the signal" },
{ category: "Logic Gates", question: "What is the purpose of logic minimization?", options: ["Reduce gate count", "Increase power", "Increase delay", "Store data"], answer: "Reduce gate count", explanation: "Simplifying Boolean expressions reduces circuit complexity" },
{ category: "Logic Gates", question: "Simplify: A + AB", options: ["A", "B", "AB", "A+B"], answer: "A", explanation: "Using absorption law: A + AB = A" },
{ category: "Logic Gates", question: "In a 2-input OR gate truth table, how many times will the output be 0?", options: ["1", "2", "3", "4"], answer: "1", explanation: "Output is 0 only for input 00" },
{ category: "Logic Gates", question: "When does a T flip-flop toggle?", options: ["When T=1", "When T=0", "Always", "Never"], answer: "When T=1", explanation: "T flip-flop toggles when T=1 at the clock edge" },
{ category: "Logic Gates", question: "In a 2-input XOR gate truth table, how many times does the output become 1?", options: ["2", "1", "3", "4"], answer: "2", explanation: "For inputs 01 and 10, output is 1" },
{ category: "Logic Gates", question: "Implement an OR gate using only NAND gates", options: ["(A NAND A) NAND (B NAND B)", "(A NAND B) NAND (A NAND B)", "A NAND A", "B NAND B"], answer: "(A NAND A) NAND (B NAND B)", explanation: "DeMorgan's law: OR implemented from NAND" },
{ category: "Logic Gates", question: "What is the carry output of a half-adder?", options: ["A AND B", "A OR B", "A XOR B", "A NAND B"], answer: "A AND B", explanation: "Half-adder carry = A AND B" },
{ category: "Logic Gates", question: "Simplify: AB + A'B", options: ["B", "A", "AB", "A+B"], answer: "B", explanation: "Consensus theorem applied" },
{ category: "Logic Gates", question: "What is the sum output of a full-adder?", options: ["A XOR B XOR Cin", "A AND B AND Cin", "A OR B OR Cin", "A NAND B NAND Cin"], answer: "A XOR B XOR Cin", explanation: "Sum = XOR of all three inputs" },
{ category: "Logic Gates", question: "When will the output of an OR gate be 0?", options: ["When both inputs are 0", "When one input is 1", "Never", "Always 0"], answer: "When both inputs are 0", explanation: "OR gate output is 0 only if all inputs are 0" },
{ category: "Logic Gates", question: "When will the output of an XNOR gate be 1?", options: ["When inputs are the same", "When inputs are different", "Always 1", "Never"], answer: "When inputs are the same", explanation: "XNOR outputs 1 only if inputs are the same" },
{ category: "Logic Gates", question: "Which gate outputs HIGH only when an odd number of inputs are HIGH?", options: ["XOR", "AND", "OR", "NOR"], answer: "XOR", explanation: "XOR outputs 1 for odd number of 1s" },
{ category: "Logic Gates", question: "Simplify: A(A+B)", options: ["A", "B", "AB", "A+B"], answer: "A", explanation: "Distributive law: A(A+B) = A" },
{ category: "Logic Gates", question: "What is the propagation delay of a gate?", options: ["Time for output to change after input changes", "Time to switch on", "Time to consume power", "Gate size"], answer: "Time for output to change after input changes", explanation: "Propagation delay = input to output change time" },
{ category: "Logic Gates", question: "Simplify: AB + AB'", options: ["A", "B", "AB", "A+B"], answer: "A", explanation: "A(B+B') = A" },
{ category: "Logic Gates", question: "A D flip-flop output follows?", options: ["D input at clock edge", "Inverted input", "Toggle input", "Sum input"], answer: "D input at clock edge", explanation: "D flip-flop stores D at the clock edge" },
{ category: "Logic Gates", question: "Typical voltage for logic level 0?", options: ["0V", "1V", "5V", "3.3V"], answer: "0V", explanation: "Logic 0 ≈ 0V" },
{ category: "Logic Gates", question: "Typical voltage for logic level 1?", options: ["5V", "0V", "3V", "1V"], answer: "5V", explanation: "Logic 1 ≈ 5V (TTL standard)" },
{ category: "Logic Gates", question: "Simplify: (A+B)'", options: ["A'B'", "AB", "A+B", "A'+B"], answer: "A'B'", explanation: "DeMorgan's law" },
{ category: "Logic Gates", question: "An edge-triggered flip-flop changes output on?", options: ["Clock edge", "Input change", "Always", "Reset"], answer: "Clock edge", explanation: "Edge-triggered flip-flop responds to clock rising/falling edge" },
{ category: "Logic Gates", question: "A NOR gate with the same inputs acts as?", options: ["NOT", "AND", "OR", "XOR"], answer: "NOT", explanation: "A NOR A = NOT A" },
{ category: "Logic Gates", question: "Sum of minterms represents?", options: ["OR of ANDs", "AND of ORs", "XOR of inputs", "Buffer"], answer: "OR of ANDs", explanation: "Canonical SOP form" },
{ category: "Logic Gates", question: "Product of maxterms represents?", options: ["AND of ORs", "OR of ANDs", "XOR of inputs", "Buffer"], answer: "AND of ORs", explanation: "Canonical POS form" },
{ category: "Logic Gates", question: "Number of minterms for a 3-variable function?", options: ["8", "3", "4", "2"], answer: "8", explanation: "2^3 = 8 minterms" },
{ category: "Logic Gates", question: "Number of maxterms for a 3-variable function?", options: ["8", "3", "4", "2"], answer: "8", explanation: "2^3 = 8 maxterms" },
{ category: "Logic Gates", question: "Simplify: A + A'B + AB'", options: ["A + B", "B", "A", "A + B'"], answer: "A + B", explanation: "Consensus theorem applied" },
{ category: "Logic Gates", question: "Implement an OR gate using only NOR gates", options: ["(A NOR A) NOR (B NOR B)", "A NOR B", "(A NOR A) NOR A", "B NOR B"], answer: "(A NOR A) NOR (B NOR B)", explanation: "Using NOR gates and DeMorgan's law" },
{ category: "Logic Gates", question: "When does a JK flip-flop toggle?", options: ["J=1, K=1", "J=0, K=0", "J=1, K=0", "J=0, K=1"], answer: "J=1, K=1", explanation: "JK flip-flop toggles when both J and K are 1" },
{ category: "Logic Gates", question: "Counters are made using?", options: ["Flip-flops", "AND gates", "OR gates", "Buffers"], answer: "Flip-flops", explanation: "Counters are sequences of flip-flops" },
{ category: "Logic Gates", question: "Main function of a multiplexer?", options: ["Select one input from many", "Add two numbers", "Store data", "Invert signal"], answer: "Select one input from many", explanation: "MUX selects one input based on select lines" },
{ category: "Logic Gates", question: "Main function of a demultiplexer?", options: ["Send one input to multiple outputs", "Add two numbers", "Store data", "Invert signal"], answer: "Send one input to multiple outputs", explanation: "DEMUX routes input to the selected output" },
{ category: "Logic Gates", question: "Number of select lines in a 2:1 MUX?", options: ["1", "2", "0", "3"], answer: "1", explanation: "2:1 MUX requires 1 select line" },
{ category: "Logic Gates", question: "Number of select lines in a 4:1 MUX?", options: ["2", "1", "3", "4"], answer: "2", explanation: "4 inputs require 2 select lines" },
{ category: "Logic Gates", question: "Simplify: A ⊕ 0", options: ["A", "0", "1", "A'"], answer: "A", explanation: "XOR with 0 does not change A" },
{ category: "Logic Gates", question: "Simplify: A ⊕ A", options: ["0", "1", "A", "A'"], answer: "0", explanation: "XOR with itself = 0" },
{ category: "Logic Gates", question: "Purpose of a Master-Slave flip-flop?", options: ["Avoid race condition", "Store sum", "Select input", "Buffer signal"], answer: "Avoid race condition", explanation: "Master-Slave flip-flop prevents output changes during clock pulse" },
{ category: "Logic Gates", question: "An asynchronous counter is triggered by?", options: ["Output of previous flip-flop", "Clock directly", "Input data", "Reset"], answer: "Output of previous flip-flop", explanation: "Asynchronous counter = ripple counter" },
{ category: "Logic Gates", question: "A synchronous counter is triggered by?", options: ["Common clock", "Output of previous flip-flop", "Input data", "Reset"], answer: "Common clock", explanation: "All flip-flops triggered simultaneously" },
{ category: "Logic Gates", question: "A ring counter is?", options: ["Shift register with feedback", "Memory array", "Adder circuit", "Buffer circuit"], answer: "Shift register with feedback", explanation: "Ring counter is a circular shift register" },
{ category: "Logic Gates", question: "A Johnson counter is?", options: ["Shift register with inverted feedback", "Memory array", "Adder circuit", "Buffer circuit"], answer: "Shift register with inverted feedback", explanation: "Johnson counter = twisted ring counter" },
{ category: "Logic Gates", question: "Which gates are called universal gates?", options: ["NAND & NOR", "AND & OR", "XOR & XNOR", "NOT"], answer: "NAND & NOR", explanation: "Any logic can be implemented using only NAND or NOR gates" },
{ category: "Logic Gates", question: "How many gates are required to implement AND using NAND only?", options: ["2", "1", "3", "4"], answer: "2", explanation: "First NAND gives AB', second NAND gives AB" },
{ category: "Logic Gates", question: "How many gates are required to implement OR using NOR only?", options: ["2", "1", "3", "4"], answer: "2", explanation: "OR can be implemented from NOR using DeMorgan's law" },
{ category: "Logic Gates", question: "A NAND gate with the same inputs acts as?", options: ["NOT", "AND", "OR", "XOR"], answer: "NOT", explanation: "A NAND A = NOT A" },
{ category: "Logic Gates", question: "Logic diagrams use what representation?", options: ["Standard symbols", "Colors", "Numbers", "Wires only"], answer: "Standard symbols", explanation: "Logic gates have standard symbols" },
{ category: "Logic Gates", question: "Hazards occur due to?", options: ["Propagation delays", "Gate count", "Power supply", "None"], answer: "Propagation delays", explanation: "Hazards occur due to different arrival times of signals at inputs" },
{ category: "Logic Gates", question: "What is a static hazard?", options: ["Temporary unwanted change in output when it should remain constant", "Permanent output error", "Power loss", "High temperature"], answer: "Temporary unwanted change in output when it should remain constant", explanation: "Static hazard = unwanted short pulse" },
{ category: "Logic Gates", question: "What is a dynamic hazard?", options: ["Multiple transitions on output when input changes once", "No output change", "Power surge", "Gate failure"], answer: "Multiple transitions on output when input changes once", explanation: "Dynamic hazard = multiple glitches" },
{ category: "Logic Gates", question: "Rise time in a gate is:", options: ["Time output goes 0→1", "Time input goes 0→1", "Time output goes 1→0", "Total delay"], answer: "Time output goes 0→1", explanation: "Rise time = output transition from 0 to 1" },
{ category: "Logic Gates", question: "Fall time in a gate is:", options: ["Time output goes 1→0", "Time input goes 1→0", "Time output goes 0→1", "Total delay"], answer: "Time output goes 1→0", explanation: "Fall time = output transition from 1 to 0" },
//uply based questions
{ category: "Logic Gates", question: "Which of the following expressions is equivalent to X + X'Y?", options: ["X + Y", "X' + Y", "X + XY", "X' + X + Y"], answer: "X + Y", explanation: "Using the Consensus theorem: X + X'Y = X + Y" },
{ category: "Logic Gates", question: "What is the minimum number of gates required to implement X + Y + XY?", options: ["2", "3", "4", "1"], answer: "2", explanation: "Simplify X + Y + XY = X + Y; only one OR gate needed" },
{ category: "Logic Gates", question: "Which gate can be used to implement any Boolean function?", options: ["NAND", "AND", "OR", "XOR"], answer: "NAND", explanation: "NAND is a universal gate; any function can be implemented using only NAND gates" },
{ category: "Logic Gates", question: "Which gate acts as an inverter when both inputs are same?", options: ["NAND", "NOR", "AND", "OR"], answer: "NAND", explanation: "NAND with both inputs same behaves as NOT" },
{ category: "Logic Gates", question: "In a XOR gate, if both inputs are same, output is?", options: ["0", "1", "Same as input", "Toggle"], answer: "0", explanation: "XOR outputs 0 when inputs are equal" },
{ category: "Logic Gates", question: "Simplify: AB + A'B + AB'", options: ["A + B", "B", "A", "A + B'"], answer: "A + B", explanation: "Consensus theorem: AB + A'B + AB' = A + B" },
{ category: "Logic Gates", question: "Which logic gate has maximum propagation delay in CMOS?", options: ["XOR", "AND", "OR", "NOT"], answer: "XOR", explanation: "XOR gate requires more transistors → higher delay" },
{ category: "Logic Gates", question: "If fan-out of a gate is exceeded, output voltage will?", options: ["Decrease", "Increase", "Remain same", "Toggle"], answer: "Decrease", explanation: "Exceeding fan-out causes voltage drop and logic degradation" },
{ category: "Logic Gates", question: "Which gate is called 'Odd parity generator'?", options: ["XOR", "AND", "OR", "XNOR"], answer: "XOR", explanation: "XOR produces 1 for odd number of 1s → Odd parity" },
{ category: "Logic Gates", question: "How many minterms are required to implement a 4-variable function using SOP?", options: ["16", "8", "4", "2"], answer: "16", explanation: "2^4 = 16 minterms for 4-variable function" },
{ category: "Logic Gates", question: "If a flip-flop has no clock, it behaves as?", options: ["Latch", "Counter", "Buffer", "Multiplexer"], answer: "Latch", explanation: "Flip-flop without clock acts as a level-sensitive latch" },
{ category: "Logic Gates", question: "Which gate combination can implement XOR using only NAND gates?", options: ["4 NAND gates", "2 NAND gates", "3 NAND gates", "1 NAND gate"], answer: "4 NAND gates", explanation: "XOR requires 4 NAND gates in combination" },
{ category: "Logic Gates", question: "Number of outputs for a 3-input AND gate?", options: ["1", "2", "3", "4"], answer: "1", explanation: "AND gate always has single output" },
{ category: "Logic Gates", question: "Which gate is used in multiplexer to select input?", options: ["AND", "OR", "XOR", "NOT"], answer: "AND", explanation: "AND gates with select lines help pass the chosen input" },
{ category: "Logic Gates", question: "What happens to a D flip-flop if clock is continuously high?", options: ["Acts as transparent latch", "Stores 0", "Stores 1", "Toggles"], answer: "Acts as transparent latch", explanation: "When clock is always high, D follows input" },
{ category: "Logic Gates", question: "In a 4-input NOR gate, output is 1 only when?", options: ["All inputs are 0", "All inputs are 1", "One input is 1", "Two inputs are 1"], answer: "All inputs are 0", explanation: "NOR = NOT(OR), output 1 only if all inputs 0" },
{ category: "Logic Gates", question: "Which is true for a universal NAND gate?", options: ["Can implement AND, OR, NOT", "Only AND", "Only OR", "Cannot implement XOR"], answer: "Can implement AND, OR, NOT", explanation: "NAND is universal gate" },
{ category: "Logic Gates", question: "If input A=1 and B=0, what is output of A XNOR B?", options: ["0", "1", "A", "B"], answer: "0", explanation: "XNOR = 1 if inputs are same; here 1 ≠ 0 → output 0" },
{ category: "Logic Gates", question: "Which gate combination is fastest for combinational circuits?", options: ["NAND-only", "NOR-only", "Mixed gates", "XOR-only"], answer: "NAND-only", explanation: "NAND gates have lower delay and can implement all functions" },
{ category: "Logic Gates", question: "Simplify: (A + B)(A + B')", options: ["A", "B", "B'", "AB"], answer: "A", explanation: "Using distributive law: (A + B)(A + B') = A" },


  // Combinational Circuits
{ category: "Combinational Circuits", question: "What are the outputs of a Half Adder?", options: ["Sum & Carry", "Only Sum", "Only Carry", "None"], answer: "Sum & Carry", explanation: "A Half Adder produces both sum and carry outputs." },
{ category: "Combinational Circuits", question: "What is the difference output of a Full Subtractor?", options: ["A XOR B XOR Bin","A AND B","A OR B","A NAND B"], answer: "A XOR B XOR Bin", explanation: "The difference output = A XOR B XOR Bin." },
{ category: "Combinational Circuits", question: "What is the carry output Boolean expression of a Half Adder?", options: ["A AND B","A OR B","A XOR B","A NOR B"], answer: "A AND B", explanation: "Carry = A AND B." },
{ category: "Combinational Circuits", question: "What is the function of the Enable pin in decoders/multiplexers?", options: ["Enable/disable operation","Add numbers","Subtract numbers","Compare numbers"], answer: "Enable/disable operation", explanation: "The Enable pin controls the operation of the circuit." },
{ category: "Combinational Circuits", question: "What are the outputs of a 4-bit comparator?", options: ["A>B, A<B, A=B","Sum & Carry","Only Sum","Only Carry"], answer: "A>B, A<B, A=B", explanation: "A 4-bit comparator provides three outputs for magnitude comparison." },
{ category: "Combinational Circuits", question: "What is the use of a Priority Encoder?", options: ["Detect the highest priority input","Store data","Add numbers","Subtract numbers"], answer: "Detect the highest priority input", explanation: "The priority encoder outputs the code of the highest priority active input." },
{ category: "Combinational Circuits", question: "Boolean expression of a 4-to-1 multiplexer?", options: ["Y = A'B'C'D0 + ...","Y = AB + CD","Y = A XOR B","Y = A AND B"], answer: "Y = A'B'C'D0 + ...", explanation: "The sum of products form for 4 inputs." },
{ category: "Combinational Circuits", question: "What is the borrow output of a Half Subtractor?", options: ["A'B","AB","A XOR B","A OR B"], answer: "A'B", explanation: "Borrow = A' AND B." },
{ category: "Combinational Circuits", question: "Carry output expression of a Full Adder?", options: ["AB + BCin + ACin","A XOR B","A OR B","A AND B"], answer: "AB + BCin + ACin", explanation: "Carry = AB + BCin + ACin." },
{ category: "Combinational Circuits", question: "Purpose of flags in an ALU?", options: ["Indicate carry, zero, overflow","Store data","Invert input","Select operation"], answer: "Indicate carry, zero, overflow", explanation: "Flags indicate the status of the result." },
{ category: "Combinational Circuits", question: "Boolean expression of sum output of Half Adder?", options: ["A XOR B","A AND B","A OR B","A NAND B"], answer: "A XOR B", explanation: "Sum output = A XOR B." },
{ category: "Combinational Circuits", question: "Main feature of combinational circuits?", options: ["Output depends only on current input","Depends on past input","Stores memory","Clock dependent"], answer: "Output depends only on current input", explanation: "Combinational circuits are memoryless." },
{ category: "Combinational Circuits", question: "Boolean expression of 2-to-1 multiplexer?", options: ["Y = A'S + BS","Y = A+B","Y = AB","Y = A XOR B"], answer: "Y = A'S + BS", explanation: "Mux formula: Y = A'S + BS." },
{ category: "Combinational Circuits", question: "Sum output expression of Full Adder?", options: ["A XOR B XOR Cin","A AND B","A OR B","A NAND B"], answer: "A XOR B XOR Cin", explanation: "Sum = A XOR B XOR Cin." },
{ category: "Combinational Circuits", question: "What are the outputs of a Full Adder?", options: ["Sum & Carry", "Only Sum", "Only Carry", "None"], answer: "Sum & Carry", explanation: "A Full Adder has 3 inputs and 2 outputs (sum & carry)." },
{ category: "Combinational Circuits", question: "Which circuit is opposite of a Multiplexer?", options: ["Demultiplexer","Encoder","Decoder","Adder"], answer: "Demultiplexer", explanation: "Demux distributes a single input to multiple outputs." },
{ category: "Combinational Circuits", question: "Main drawback of a Ripple Carry Adder?", options: ["Slow due to carry propagation","Consumes more power","No drawback","Memory storage"], answer: "Slow due to carry propagation", explanation: "Carry propagates through all stages causing delay." },
{ category: "Combinational Circuits", question: "Function of a 4-to-1 multiplexer?", options: ["Select one input out of four","Add numbers","Store data","Invert signal"], answer: "Select one input out of four", explanation: "Multiplexer selects a single input based on select lines." },
{ category: "Combinational Circuits", question: "Borrow output of Full Subtractor?", options: ["A'B + A'Bin + BBin","AB + BCin","A XOR B","A OR B"], answer: "A'B + A'Bin + BBin", explanation: "Borrow = A'B + A'Bin + BBin." },
{ category: "Combinational Circuits", question: "Main function of an ALU?", options: ["Perform arithmetic & logic operations","Store data","Only add numbers","Only compare"], answer: "Perform arithmetic & logic operations", explanation: "ALU performs both arithmetic and logic operations." },
{ category: "Combinational Circuits", question: "Number of select lines in 1-to-4 demultiplexer?", options: ["2","1","4","3"], answer: "2", explanation: "2 select lines choose one of 4 outputs." },
{ category: "Combinational Circuits", question: "Example of combinational circuits?", options: ["Adder, Subtractor, Mux, Demux","Flip-flop","Counter","Register"], answer: "Adder, Subtractor, Mux, Demux", explanation: "These are memoryless combinational circuits." },
{ category: "Combinational Circuits", question: "Function of a 2-to-4 decoder?", options: ["Convert 2 inputs to 4 outputs","Add numbers","Select input","Store data"], answer: "Convert 2 inputs to 4 outputs", explanation: "Decoder converts n inputs to 2^n outputs." },
{ category: "Combinational Circuits", question: "Number of inputs in a Comparator circuit?", options: ["2 or more","1","3","4"], answer: "2 or more", explanation: "Comparator compares two or more binary numbers." },
{ category: "Combinational Circuits", question: "Purpose of control lines in ALU?", options: ["Select operation","Store data","Add numbers","Compare numbers"], answer: "Select operation", explanation: "Control lines determine the operation performed by the ALU." },
{ category: "Combinational Circuits", question: "Number of rows in 2-to-4 decoder truth table?", options: ["4","2","8","6"], answer: "4", explanation: "2 inputs produce 4 rows in the truth table." },
{ category: "Combinational Circuits", question: "Purpose of Sum of Products (SOP)?", options: ["Boolean simplification","Memory storage","Add numbers","Compare numbers"], answer: "Boolean simplification", explanation: "SOP is used to implement logic directly." },
{ category: "Combinational Circuits", question: "Logic operations performed by ALU?", options: ["AND, OR, XOR, NOT","Add, Subtract","Multiply, Divide","Store only"], answer: "AND, OR, XOR, NOT", explanation: "ALU performs bitwise logic operations." },
{ category: "Combinational Circuits", question: "Function of select lines in Multiplexer?", options: ["Choose input line","Output data","Store data","Invert signal"], answer: "Choose input line", explanation: "Select lines choose which input is sent to the output." },
{ category: "Combinational Circuits", question: "Outputs of Full Subtractor?", options: ["Difference & Borrow","Sum & Carry","Only Difference","Only Borrow"], answer: "Difference & Borrow", explanation: "Full Subtractor produces difference and borrow outputs." },
{ category: "Combinational Circuits", question: "Full form of K-map?", options: ["Karnaugh map","Key map","Keep map","None"], answer: "Karnaugh map", explanation: "K-map is a graphical method for logic simplification." },
{ category: "Combinational Circuits", question: "Greater output of a Comparator?", options: ["High if A>B","High if A<B","Always low","Always high"], answer: "High if A>B", explanation: "Output = 1 if A>B." },
{ category: "Combinational Circuits", question: "Difference output of Half Subtractor?", options: ["A XOR B","A AND B","A OR B","A NAND B"], answer: "A XOR B", explanation: "Difference = A XOR B." },
{ category: "Combinational Circuits", question: "ALU outputs?", options: ["Result & Flags","Only Result","Only Flags","No Output"], answer: "Result & Flags", explanation: "ALU outputs both the result and status flags." },
{ category: "Combinational Circuits", question: "Function of a 2-bit magnitude comparator?", options: ["Compare A and B","Add numbers","Subtract numbers","Store data"], answer: "Compare A and B", explanation: "Comparator compares binary numbers." },
{ category: "Combinational Circuits", question: "Ratio of 4-inputs to 2-select lines in MUX?", options: ["2^n rule","1:1","1:2","None"], answer: "2^n rule", explanation: "2 select lines select 2^2 = 4 inputs." },
{ category: "Combinational Circuits", question: "Borrow output of Full Subtractor?", options: ["A'B + A'Bin + BBin","AB + BCin","A XOR B","A OR B"], answer: "A'B + A'Bin + BBin", explanation: "Borrow = A'B + A'Bin + BBin." },
{ category: "Combinational Circuits", question: "Boolean expression of Half Adder sum output?", options: ["A XOR B","A AND B","A OR B","A NAND B"], answer: "A XOR B", explanation: "Sum = A XOR B." },
{ category: "Combinational Circuits", question: "Smaller output of Comparator?", options: ["High if A<B","High if A>B","Always low","Always high"], answer: "High if A<B", explanation: "Output = 1 if A<B." },
{ category: "Combinational Circuits", question: "Purpose of logic minimization?", options: ["Reduce gates","Store data","Add numbers","Compare numbers"], answer: "Reduce gates", explanation: "Minimization reduces hardware complexity." },
{ category: "Combinational Circuits", question: "Sum output expression of Full Adder?", options: ["A XOR B XOR Cin","A AND B","A OR B","A NAND B"], answer: "A XOR B XOR Cin", explanation: "Sum = A XOR B XOR Cin." },
{ category: "Combinational Circuits", question: "Basic operations of 1-bit ALU?", options: ["AND, OR, ADD, SUB","Multiplication only","Division only","Buffer only"], answer: "AND, OR, ADD, SUB", explanation: "Basic ALU operations include AND, OR, addition and subtraction." },
{ category: "Combinational Circuits", question: "Circuit used for binary subtraction?", options: ["Half Subtractor", "Full Subtractor", "Multiplier", "Encoder"], answer: "Half Subtractor", explanation: "Half Subtractor subtracts two bits." },
{ category: "Combinational Circuits", question: "Difference output of Full Subtractor?", options: ["A XOR B XOR Bin","A AND B","A OR B","A NAND B"], answer: "A XOR B XOR Bin", explanation: "Difference = A XOR B XOR Bin." },
{ category: "Combinational Circuits", question: "Main purpose of a Decoder?", options: ["Convert binary input to unique output","Add numbers","Subtract numbers","Store data"], answer: "Convert binary input to unique output", explanation: "Decoder activates a single output based on binary input." },
{ category: "Combinational Circuits", question: "What is a 4-bit binary adder called?", options: ["Ripple Carry Adder","Half Adder","Full Subtractor","Multiplier"], answer: "Ripple Carry Adder", explanation: "A 4-bit adder is implemented as a Ripple Carry Adder." },
{ category: "Combinational Circuits", question: "Circuit opposite to Multiplexer?", options: ["Demultiplexer","Encoder","Decoder","Adder"], answer: "Demultiplexer", explanation: "Demux distributes single input to multiple outputs." },
//uplt example based questions
{ category: "Combinational Circuits", question: "Which Boolean expression is equivalent to X + X'Y?", options: ["X + Y", "X' + Y", "XY + X", "X' + X + Y"], answer: "X + Y", explanation: "Using absorption law: X + X'Y = X + Y." },
{ category: "Combinational Circuits", question: "In a 3-to-8 decoder, how many outputs are active at the same time?", options: ["1", "2", "3", "All"], answer: "1", explanation: "Only one output is active based on the 3 input lines." },
{ category: "Combinational Circuits", question: "What is the minimal SOP expression for F(A,B,C) = Σ(1,3,5,7)?", options: ["A'B'C + AB'C + ABC", "B XOR C", "A + B + C", "A'B + BC"], answer: "B XOR C", explanation: "Simplify using K-map: function reduces to B XOR C." },
{ category: "Combinational Circuits", question: "Which logic gate can implement any Boolean function?", options: ["NAND", "AND", "OR", "XOR"], answer: "NAND", explanation: "NAND is universal; any Boolean function can be implemented using only NAND gates." },
{ category: "Combinational Circuits", question: "The output of XNOR gate is 1 when?", options: ["Both inputs are same", "Both inputs are different", "At least one input is 1", "At least one input is 0"], answer: "Both inputs are same", explanation: "XNOR outputs 1 only if both inputs are identical." },
{ category: "Combinational Circuits", question: "Which combination of logic gates can implement a XOR function?", options: ["(A AND NOT B) OR (NOT A AND B)", "A AND B", "A OR B", "A NAND B"], answer: "(A AND NOT B) OR (NOT A AND B)", explanation: "XOR = A'B + AB'." },
{ category: "Combinational Circuits", question: "What is the output of a 2-to-4 decoder when both inputs are 0 and enable is 1?", options: ["Y0=1, Y1=Y2=Y3=0", "Y0=Y1=Y2=Y3=1", "All outputs 0", "Y3=1"], answer: "Y0=1, Y1=Y2=Y3=0", explanation: "Only the output corresponding to binary 00 is high." },
{ category: "Combinational Circuits", question: "If a 4-to-1 multiplexer has inputs A=0, B=1, C=1, D=0, and select lines S1S0=10, what is output?", options: ["C", "A", "B", "D"], answer: "C", explanation: "Select lines 10 choose the third input (C)." },
{ category: "Combinational Circuits", question: "Which is the simplified Boolean expression of F = AB + A'B + AB'?", options: ["A + B", "A XOR B", "B", "A"], answer: "A + B", explanation: "Combine terms: AB + A'B + AB' = B + A = A + B." },
{ category: "Combinational Circuits", question: "Which of the following is a universal gate?", options: ["NAND and NOR", "AND and OR", "XOR", "XNOR"], answer: "NAND and NOR", explanation: "Both NAND and NOR can implement any Boolean function." },
{ category: "Combinational Circuits", question: "A Full Adder can be built using how many Half Adders?", options: ["2 Half Adders and 1 OR gate", "1 Half Adder only", "3 Half Adders", "2 Half Adders only"], answer: "2 Half Adders and 1 OR gate", explanation: "Full Adder = 2 Half Adders + OR gate to combine carries." },
{ category: "Combinational Circuits", question: "Boolean simplification of F = (A + B)(A + B')?", options: ["A", "B", "A + B", "A AND B"], answer: "A", explanation: "Use distribution and complement: (A+B)(A+B') = A." },
{ category: "Combinational Circuits", question: "Which input combination of a 3-input AND gate will produce 0?", options: ["Any input 0", "All inputs 1", "All inputs 0", "Only first input 1"], answer: "Any input 0", explanation: "AND gate outputs 0 if any input is 0." },
{ category: "Combinational Circuits", question: "How many minterms are there for 3 variables?", options: ["8", "6", "4", "3"], answer: "8", explanation: "Number of minterms = 2^n = 2^3 = 8." },
{ category: "Combinational Circuits", question: "In which case a multiplexer behaves like an OR gate?", options: ["When inputs are 0 and 1 connected in OR logic form", "Always", "Never", "When select lines = 0"], answer: "When inputs are 0 and 1 connected in OR logic form", explanation: "MUX can be programmed to implement any logic function." },
{ category: "Combinational Circuits", question: "Which gate has output 1 for only one input combination?", options: ["AND gate with all inputs 1", "OR gate with all inputs 0", "NAND gate", "NOR gate"], answer: "AND gate with all inputs 1", explanation: "AND outputs 1 only if all inputs are 1." },
{ category: "Combinational Circuits", question: "Which expression is the complement of A + B?", options: ["A'B'", "A' + B'", "AB", "A + B"], answer: "A'B'", explanation: "By De Morgan's law: (A+B)' = A'B'." },
{ category: "Combinational Circuits", question: "What is the output of XOR gate if both inputs are 1?", options: ["0", "1", "Depends", "Undefined"], answer: "0", explanation: "XOR outputs 0 if both inputs are equal." },
{ category: "Combinational Circuits", question: "Which combination of gates can implement a NAND function?", options: ["NOT after AND", "AND alone", "OR alone", "NOT alone"], answer: "NOT after AND", explanation: "NAND = AND gate followed by NOT gate." },

  // Sequential Circuits
{ category: "Sequential Circuits", question: "What is the main use of a Flip-Flop?", options: ["Memory Storage", "Adder", "Multiplexer", "Decoder"], answer: "Memory Storage", explanation: "A Flip-Flop is a sequential circuit used to store memory." },
{ category: "Sequential Circuits", question: "What is the main application of a D Flip-Flop?", options: ["Shift register","Counter","Oscillator","Timer"], answer: "Shift register", explanation: "D Flip-Flop is used in shift registers." },
{ category: "Sequential Circuits", question: "Main advantage of a synchronous counter?", options: ["No propagation delay","Simple design","Memoryless","Toggle only"], answer: "No propagation delay", explanation: "All flip-flops are triggered simultaneously → reduces delay." },
{ category: "Sequential Circuits", question: "Toggle condition of a T Flip-Flop?", options: ["T=1","T=0","T=Clock","T=Q"], answer: "T=1", explanation: "The flip-flop toggles when T=1." },
{ category: "Sequential Circuits", question: "Main disadvantage of a shift register?", options: ["Slower than parallel memory","No disadvantage","High power","Invalid state"], answer: "Slower than parallel memory", explanation: "Serial transfer is slower than parallel memory." },
{ category: "Sequential Circuits", question: "Reset state of an SR Flip-Flop?", options: ["S=0, R=1", "S=1, R=0", "S=0, R=0", "S=1, R=1"], answer: "S=0, R=1", explanation: "S=0 and R=1 resets Q to 0." },
{ category: "Sequential Circuits", question: "Maximum count of a 3-bit synchronous counter?", options: ["7","8","15","16"], answer: "7", explanation: "A 3-bit counter counts from 0 to 7." },
{ category: "Sequential Circuits", question: "Counting sequence of an asynchronous down counter?", options: ["High to low","Low to high","Random","Depends on input"], answer: "High to low", explanation: "A down counter counts from high to low." },
{ category: "Sequential Circuits", question: "Reset condition of a JK Flip-Flop?", options: ["J=0, K=1", "J=1, K=0", "J=1, K=1", "J=0, K=0"], answer: "J=0, K=1", explanation: "J=0 and K=1 resets the flip-flop." },
{ category: "Sequential Circuits", question: "Toggle condition in T Flip-Flop characteristic table?", options: ["T=1","T=0","Depends on Q","Always"], answer: "T=1", explanation: "Q toggles when T=1." },
{ category: "Sequential Circuits", question: "Main challenge of sequential circuits?", options: ["Timing hazards & glitches","Memoryless","Always OR gate","Always AND gate"], answer: "Timing hazards & glitches", explanation: "Sequential circuits have timing issues which are design challenges." },
{ category: "Sequential Circuits", question: "What does the characteristic table of an SR Flip-Flop represent?", options: ["Next state for each input combination","Current state","Output only","Input only"], answer: "Next state for each input combination", explanation: "The characteristic table shows the next state based on inputs." },
{ category: "Sequential Circuits", question: "Edge trigger of a D Flip-Flop?", options: ["Rising/Falling edge","Input change","Output change","Always"], answer: "Rising/Falling edge", explanation: "D Flip-Flop triggers at the clock edge." },
{ category: "Sequential Circuits", question: "Relation between Q and Q' in a shift register?", options: ["Q' = NOT Q","Q' = Q","Q' = Input","Q' = Output"], answer: "Q' = NOT Q", explanation: "Complementary outputs are always opposite." },
{ category: "Sequential Circuits", question: "Main feature of an asynchronous counter?", options: ["Flip-flops clocked at different times","All flip-flops clocked simultaneously","Memoryless","Toggle only"], answer: "Flip-flops clocked at different times", explanation: "Flip-flops are triggered sequentially using the previous flip-flop's output." },
{ category: "Sequential Circuits", question: "Main advantage of a sequential circuit?", options: ["Complex function realization with memory","Memoryless","Only combinational","Oscillator"], answer: "Complex function realization with memory", explanation: "Sequential circuits can perform complex functions and store memory." },
{ category: "Sequential Circuits", question: "Characteristic table of a D Flip-Flop shows?", options: ["Next state for each D input","Current state","Output only","Input only"], answer: "Next state for each D input", explanation: "Shows the next state based on D input." },
{ category: "Sequential Circuits", question: "Toggle condition of a JK Flip-Flop?", options: ["J=1, K=1", "J=0, K=0", "J=1, K=0", "J=0, K=1"], answer: "J=1, K=1", explanation: "JK Flip-Flop toggles when J=K=1." },
{ category: "Sequential Circuits", question: "Main application of a Finite State Machine (FSM)?", options: ["Control circuits","Oscillator","Memory","Adder"], answer: "Control circuits", explanation: "FSMs are used extensively in digital control circuits." },
{ category: "Sequential Circuits", question: "Relation between Q and Q' in SR Flip-Flop?", options: ["Q' = NOT Q","Q' = Q","Q' = S","Q' = R"], answer: "Q' = NOT Q", explanation: "Complementary outputs are always opposite." },
{ category: "Sequential Circuits", question: "How is flip-flop input controlled in a synchronous counter?", options: ["Logic gating","Direct clock","Random","Depends on Q"], answer: "Logic gating", explanation: "Logic gates determine the next state input for flip-flops." },
{ category: "Sequential Circuits", question: "Main difference between sequential and combinational circuits?", options: ["Memory presence","Memoryless","Always fast","No output"], answer: "Memory presence", explanation: "Sequential circuits have memory, combinational circuits do not." },
{ category: "Sequential Circuits", question: "Main disadvantage of a Mealy machine?", options: ["Output glitches","Stable output","No toggle","Memoryless"], answer: "Output glitches", explanation: "Mealy machine outputs may glitch during input transitions." },
{ category: "Sequential Circuits", question: "Setup time of a D Flip-Flop?", options: ["Data stable before clock edge","Data stable after clock edge","Output stable","Input unstable"], answer: "Data stable before clock edge", explanation: "Setup time = Data must be stable before the clock edge." },
{ category: "Sequential Circuits", question: "Set state of an SR Flip-Flop?", options: ["S=1, R=0", "S=0, R=1", "S=0, R=0", "S=1, R=1"], answer: "S=1, R=0", explanation: "S=1 and R=0 sets Q=1." },
{ category: "Sequential Circuits", question: "Main types of shift registers?", options: ["SISO, SIPO, PISO, PIPO","JK, D, T, SR","Up & Down","Moore & Mealy"], answer: "SISO, SIPO, PISO, PIPO", explanation: "Shift registers are classified into four types." },
{ category: "Sequential Circuits", question: "Characteristic equation of JK Flip-Flop?", options: ["Q_next = JQ' + K'Q", "Q_next = J'Q + KQ'", "Q_next = JQ + KQ'", "Q_next = J+K"], answer: "Q_next = JQ' + K'Q", explanation: "Characteristic equation: Q_next = JQ' + K'Q." },
{ category: "Sequential Circuits", question: "State changes in a clocked JK Flip-Flop occur when?", options: ["On clock pulse","On input","On output","Always"], answer: "On clock pulse", explanation: "State changes occur at clock edge only." },
{ category: "Sequential Circuits", question: "Main function of a D Flip-Flop?", options: ["Data storage","Toggle","Reset","Set"], answer: "Data storage", explanation: "D Flip-Flop stores input data at the clock edge." },
{ category: "Sequential Circuits", question: "Main advantage of T Flip-Flop?", options: ["Simple design for toggle","No toggle","Invalid state","Memoryless"], answer: "Simple design for toggle", explanation: "T Flip-Flop easily toggles." },
{ category: "Sequential Circuits", question: "Main application of shift registers?", options: ["Data storage & transfer","Counting","Oscillator","Memory"], answer: "Data storage & transfer", explanation: "Shift registers are mainly used for storage and data transfer." },
{ category: "Sequential Circuits", question: "Main advantage of edge-triggered flip-flops?", options: ["Avoid race conditions","Memoryless","No toggle","Oscillator"], answer: "Avoid race conditions", explanation: "Edge-triggered flip-flops prevent race conditions." },
{ category: "Sequential Circuits", question: "Purpose of a state diagram?", options: ["System behavior visualization","Add numbers","Subtract numbers","Store data"], answer: "System behavior visualization", explanation: "State diagrams show state transitions of a machine." },
{ category: "Sequential Circuits", question: "Advantage of a Moore machine?", options: ["Stable output","Fast output change","No memory","Toggle"], answer: "Stable output", explanation: "Moore machine outputs depend only on states → stable output." },
{ category: "Sequential Circuits", question: "How to make an asynchronous counter a mod-N counter?", options: ["Reset on N","Toggle N times","Use JK flip-flop","Use D flip-flop"], answer: "Reset on N", explanation: "In mod-N counters, the counter resets at N." },
{ category: "Sequential Circuits", question: "Main elements of a sequential circuit?", options: ["Flip-flops, gates, clock","Adder, Subtractor","Memory only","Oscillator only"], answer: "Flip-flops, gates, clock", explanation: "Sequential circuits consist of flip-flops, combinational gates, and clock." },
{ category: "Sequential Circuits", question: "Type of JK Flip-Flop?", options: ["Bistable","Monostable","Astable","Toggle"], answer: "Bistable", explanation: "JK Flip-Flop is bistable, having two stable states." },
{ category: "Sequential Circuits", question: "Type of D Flip-Flop?", options: ["Bistable","Monostable","Astable","Toggle"], answer: "Bistable", explanation: "D Flip-Flop is bistable." },
{ category: "Sequential Circuits", question: "Main application of synchronous counter?", options: ["Digital clocks","Oscillator","Memory","Adder"], answer: "Digital clocks", explanation: "Synchronous counters are used in fast digital clocks." },
{ category: "Sequential Circuits", question: "SR Flip-Flop circuit can be implemented using?", options: ["NOR/NAND gates","AND gates","OR gates","XOR gates"], answer: "NOR/NAND gates", explanation: "SR Flip-Flop can be implemented using NOR or NAND gates." },
{ category: "Sequential Circuits", question: "Use of timing diagram in a synchronous counter?", options: ["State visualization","Add numbers","Subtract numbers","Store data"], answer: "State visualization", explanation: "Timing diagrams show clock sequence and state transitions clearly." },
{ category: "Sequential Circuits", question: "Full form of FSM?", options: ["Finite State Machine","Fast Switching Machine","Flip State Memory","Functional State Model"], answer: "Finite State Machine", explanation: "FSM = Finite State Machine." },
{ category: "Sequential Circuits", question: "Edge trigger of T Flip-Flop occurs when?", options: ["Rising/Falling edge","Input change","Output change","Always"], answer: "Rising/Falling edge", explanation: "T Flip-Flop is edge-triggered." },
{ category: "Sequential Circuits", question: "Counting sequence of an asynchronous up counter?", options: ["Low to high","High to low","Random","Depends on input"], answer: "Low to high", explanation: "Up counter counts from low to high." },
{ category: "Sequential Circuits", question: "Relation between Q and Q' in D Flip-Flop?", options: ["Q' = NOT Q","Q' = Q","Q' = D","Q' = D'"], answer: "Q' = NOT Q", explanation: "Complementary outputs are always opposite." },
{ category: "Sequential Circuits", question: "Does JK Flip-Flop have an invalid state?", options: ["No","Yes","Sometimes","Depends"], answer: "No", explanation: "JK Flip-Flop has no invalid state; it is designed to avoid toggling issues." },
{ category: "Sequential Circuits", question: "Function of clock in a shift register?", options: ["Synchronize data transfer","Add numbers","Compare","Store data"], answer: "Synchronize data transfer", explanation: "Clock synchronizes data transfer." },
{ category: "Sequential Circuits", question: "Type of T Flip-Flop?", options: ["Bistable","Monostable","Astable","Toggle"], answer: "Bistable", explanation: "T Flip-Flop is bistable." },
{ category: "Sequential Circuits", question: "Output of a Mealy machine depends on?", options: ["Current state & input","Current state only","Input only","Previous state only"], answer: "Current state & input", explanation: "Mealy machine output depends on current state and input." },
{ category: "Sequential Circuits", question: "Main feature of a sequential circuit?", options: ["Output depends on current & past inputs","Memoryless","Only combinational","Oscillator"], answer: "Output depends on current & past inputs", explanation: "Sequential circuits output depends on input history too." },
{ category: "Sequential Circuits", question: "Disadvantage of synchronous counter?", options: ["More hardware","Ripple delay","Invalid state","Memoryless"], answer: "More hardware", explanation: "Extra gates increase hardware requirement in synchronous counters." },
{ category: "Sequential Circuits", question: "Purpose of flip-flop excitation table?", options: ["Determine required inputs for next state","Add numbers","Subtract numbers","Store data"], answer: "Determine required inputs for next state", explanation: "Excitation table shows inputs needed for the next state." },
{ category: "Sequential Circuits", question: "Type of SR Flip-Flop?", options: ["Bistable","Monostable","Astable","Toggle"], answer: "Bistable", explanation: "SR Flip-Flop is a bistable multivibrator with two stable states." },
{ category: "Sequential Circuits", question: "Main applications of sequential circuits?", options: ["Counters, shift registers, FSMs","Adder","Subtractor","Oscillator"], answer: "Counters, shift registers, FSMs", explanation: "Sequential circuits are used in various digital systems." },
{ category: "Sequential Circuits", question: "Definition of setup time?", options: ["Data stable before clock edge","Data stable after clock edge","Output stable","Input unstable"], answer: "Data stable before clock edge", explanation: "Setup time = Data must be stable before clock edge." },
{ category: "Sequential Circuits", question: "Relation between Q and Q' in a shift register?", options: ["Q' = NOT Q","Q' = Q","Q' = Input","Q' = Output"], answer: "Q' = NOT Q", explanation: "Complementary outputs are always opposite." },
{ category: "Sequential Circuits", question: "Main function of a T Flip-Flop?", options: ["Toggle","Store data","Reset","Set"], answer: "Toggle", explanation: "T Flip-Flop toggles the output." },
{ category: "Sequential Circuits", question: "Output of a Moore machine depends on?", options: ["Current state only","Current state & input","Input only","Previous state"], answer: "Current state only", explanation: "Moore machine output depends only on state." },
//uplt based questions  
{ category: "Sequential Circuits", question: "Why is a master-slave JK Flip-Flop preferred over a simple JK Flip-Flop?", options: ["Eliminates race condition","Consumes less power","Faster operation","Smaller size"], answer: "Eliminates race condition", explanation: "Master-Slave configuration prevents race condition by separating master and slave stages." },
{ category: "Sequential Circuits", question: "What happens if setup time is violated in a D Flip-Flop?", options: ["Metastable state","Output resets","Toggle occurs","Nothing"], answer: "Metastable state", explanation: "Violating setup time can cause unpredictable or metastable outputs." },
{ category: "Sequential Circuits", question: "Why are asynchronous counters slower than synchronous counters?", options: ["Ripple effect of clocks","More gates","Memoryless","Toggle only"], answer: "Ripple effect of clocks", explanation: "Each flip-flop triggers after the previous one → cumulative delay." },
{ category: "Sequential Circuits", question: "What is the advantage of using edge-triggered flip-flops over level-triggered?", options: ["Prevents multiple transitions in a single clock cycle","Consumes less power","Easier to design","No advantage"], answer: "Prevents multiple transitions in a single clock cycle", explanation: "Edge-triggered flip-flops change state only on clock edges, avoiding glitches." },
{ category: "Sequential Circuits", question: "In a mod-10 synchronous counter, how many flip-flops are required?", options: ["4","3","5","10"], answer: "4", explanation: "Minimum flip-flops = log2(10) → 4 flip-flops required." },
{ category: "Sequential Circuits", question: "How can a JK Flip-Flop be converted into a T Flip-Flop?", options: ["Connect J and K together as T input","Use additional clock","Add inverter","Connect J to 1 and K to T"], answer: "Connect J and K together as T input", explanation: "Connecting J=K=T makes JK Flip-Flop toggle on T=1." },
{ category: "Sequential Circuits", question: "Why is the asynchronous reset used in flip-flops?", options: ["To immediately reset output without waiting for clock","To save power","To toggle output","To set next state"], answer: "To immediately reset output without waiting for clock", explanation: "Asynchronous reset overrides clock and immediately sets Q=0." },
{ category: "Sequential Circuits", question: "What type of sequential circuit produces output depending only on the present state?", options: ["Moore machine","Mealy machine","Synchronous counter","Asynchronous counter"], answer: "Moore machine", explanation: "Moore machine output depends solely on the current state." },
{ category: "Sequential Circuits", question: "How is metastability minimized in flip-flops?", options: ["Use two-stage synchronizers","Increase clock frequency","Use more gates","Decrease input voltage"], answer: "Use two-stage synchronizers", explanation: "Two-stage synchronizers reduce probability of metastable outputs." },
{ category: "Sequential Circuits", question: "Why are Mealy machines faster than Moore machines in some cases?", options: ["Output depends on input change, not just state","Less hardware","Fewer flip-flops","Smaller clock delay"], answer: "Output depends on input change, not just state", explanation: "Mealy outputs respond faster because they can change with input immediately." },
{ category: "Sequential Circuits", question: "What is the main disadvantage of ripple counters?", options: ["Propagation delay accumulates","Consumes less power","Complex design","No disadvantage"], answer: "Propagation delay accumulates", explanation: "Sequential triggering causes cumulative delay → slow operation." },
{ category: "Sequential Circuits", question: "In a 4-bit synchronous counter, how many AND gates are needed to implement the counting logic?", options: ["Depends on design","2","4","8"], answer: "Depends on design", explanation: "Number of gates depends on type of flip-flop and counting logic used." },
{ category: "Sequential Circuits", question: "What is the purpose of excitation tables in flip-flop design?", options: ["Determine required inputs to achieve desired next state","Show output only","Explain current state","Store data"], answer: "Determine required inputs to achieve desired next state", explanation: "Excitation tables map present state and desired next state to required inputs." },
{ category: "Sequential Circuits", question: "Why are synchronous counters more reliable in high-speed applications than asynchronous counters?", options: ["Simultaneous triggering of flip-flops","They use fewer flip-flops","They are cheaper","They consume less power"], answer: "Simultaneous triggering of flip-flops", explanation: "Synchronous counters avoid cumulative delay by clocking all flip-flops together." },
{ category: "Sequential Circuits", question: "How can a D Flip-Flop be used to implement a divide-by-2 frequency divider?", options: ["Connect Q' to D input","Connect D to 1","Connect D to 0","Use additional gates"], answer: "Connect Q' to D input", explanation: "Feeding Q' to D toggles output every clock → divides frequency by 2." },
{ category: "Sequential Circuits", question: "What is a race-around condition in JK Flip-Flops?", options: ["When output toggles multiple times in one clock period","Output freezes","Output resets","No effect"], answer: "When output toggles multiple times in one clock period", explanation: "Occurs when both J and K =1 in level-triggered flip-flop." },

  // Memory Circuits
  { category: "Memory Circuits", question: "What is the full form of RAM?", options: ["Read Access Memory", "Random Access Memory", "Readily Available Memory", "Random Allocation Memory"], answer: "Random Access Memory", explanation: "RAM = Random Access Memory, it is volatile memory." },
{ category: "Memory Circuits", question: "What is the erase method of EEPROM?", options: ["Electrical signal", "UV light", "Clock pulse", "Manual reset"], answer: "Electrical signal", explanation: "EEPROM is erased using an electrical signal." },
{ category: "Memory Circuits", question: "Where is cache located in the memory hierarchy?", options: ["Close to CPU, fast and small", "Between RAM and HDD", "At secondary storage", "Registers"], answer: "Close to CPU, fast and small", explanation: "Cache is near the CPU, fast and small in size." },
{ category: "Memory Circuits", question: "What is the main function of memory?", options: ["Store data", "Add data", "Subtract data", "Perform logic operations only"], answer: "Store data", explanation: "Memory circuits temporarily or permanently store data." },
{ category: "Memory Circuits", question: "What is volatile memory?", options: ["Loses data when power is off", "Data remains safe when power is off", "Stores numbers only", "Performs arithmetic"], answer: "Loses data when power is off", explanation: "Volatile memory loses stored data when power is turned off." },
{ category: "Memory Circuits", question: "What is the main advantage of ROM?", options: ["Non-volatile and stable", "Volatile", "Fast like RAM", "Cache only"], answer: "Non-volatile and stable", explanation: "ROM stores data permanently and is reliable." },
{ category: "Memory Circuits", question: "What is the purpose of memory refresh?", options: ["To retain volatile memory data", "To perform arithmetic", "Logic only", "Cache only"], answer: "To retain volatile memory data", explanation: "Volatile memory requires refresh cycles to retain data." },
{ category: "Memory Circuits", question: "Difference between read-only and read/write memory?", options: ["ROM = read-only, RAM = read/write", "Both read/write", "Both read-only", "Depends"], answer: "ROM = read-only, RAM = read/write", explanation: "ROM can only be read, while RAM allows both read and write." },
{ category: "Memory Circuits", question: "What is the function of a memory module?", options: ["Physical unit of RAM", "ROM only", "Registers only", "Cache only"], answer: "Physical unit of RAM", explanation: "Memory module is the physical form of RAM mounted on the motherboard." },
{ category: "Memory Circuits", question: "Main function of a memory controller?", options: ["Manage memory access and timing", "Perform arithmetic", "Logic only", "Registers only"], answer: "Manage memory access and timing", explanation: "Memory controller manages read/write operations and timing." },
{ category: "Memory Circuits", question: "Where is flash memory mainly used?", options: ["USB drives, SSDs, Embedded systems", "RAM", "Registers", "Cache only"], answer: "USB drives, SSDs, Embedded systems", explanation: "Flash memory is used in USB drives, SSDs, and embedded systems." },
{ category: "Memory Circuits", question: "Feature of dual-port RAM?", options: ["Read/write simultaneously from two ports", "Single port only", "Volatile", "Non-volatile"], answer: "Read/write simultaneously from two ports", explanation: "Dual-port RAM allows simultaneous access from two ports." },
{ category: "Memory Circuits", question: "Cache memory: what is hit and miss?", options: ["Hit = data in cache, Miss = data not in cache", "Hit = write, Miss = read", "Both same", "Depends"], answer: "Hit = data in cache, Miss = data not in cache", explanation: "Cache hit occurs when data is in cache; miss occurs when it is not." },
{ category: "Memory Circuits", question: "What is memory latency?", options: ["Time between request and data availability", "Word length", "Bus width", "Voltage"], answer: "Time between request and data availability", explanation: "Memory latency is the time taken from request to data being available." },
{ category: "Memory Circuits", question: "What is the concept of virtual memory?", options: ["Use disk as temporary RAM", "Use extra cache", "Registers only", "ROM only"], answer: "Use disk as temporary RAM", explanation: "Virtual memory uses secondary storage as temporary RAM." },
{ category: "Memory Circuits", question: "Purpose of memory refresh cycle in DRAM?", options: ["To retain data", "To perform addition", "To perform subtraction", "Logic only"], answer: "To retain data", explanation: "DRAM requires periodic refresh to maintain stored data." },
{ category: "Memory Circuits", question: "Purpose of memory mapping?", options: ["Assign address space to memory devices", "Store data", "Perform arithmetic", "Cache only"], answer: "Assign address space to memory devices", explanation: "Memory mapping assigns address space to devices for CPU access." },
{ category: "Memory Circuits", question: "Main advantage of RAM?", options: ["Fast access", "Non-volatile", "Permanent storage", "Cheap"], answer: "Fast access", explanation: "RAM provides fast read and write access." },
{ category: "Memory Circuits", question: "Full form of EEPROM?", options: ["Electrically Erasable PROM", "Enhanced EPROM", "Extended PROM", "Electronic PROM"], answer: "Electrically Erasable PROM", explanation: "EEPROM can be erased and reprogrammed electrically." },
{ category: "Memory Circuits", question: "Main use of ROM?", options: ["Firmware storage", "Temporary storage", "CPU operations", "Registers"], answer: "Firmware storage", explanation: "ROM stores system firmware and boot programs." },
{ category: "Memory Circuits", question: "Main disadvantage of memory?", options: ["Volatility", "Slow", "Large size", "Cannot store binary"], answer: "Volatility", explanation: "RAM loses data when power is off." },
{ category: "Memory Circuits", question: "Main interface signals of RAM?", options: ["Address, data, control", "Clock only", "Voltage only", "Bus width only"], answer: "Address, data, control", explanation: "Memory access requires address, data, and control lines." },
{ category: "Memory Circuits", question: "Purpose of cache memory?", options: ["Fast data access for CPU", "Store files", "Permanent storage", "Perform arithmetic"], answer: "Fast data access for CPU", explanation: "Cache memory provides frequently used data to CPU quickly." },
{ category: "Memory Circuits", question: "Role of memory controller?", options: ["Manage read/write operations", "Perform addition", "Perform subtraction", "Logic operation"], answer: "Manage read/write operations", explanation: "Memory controller manages communication between CPU and memory." },
{ category: "Memory Circuits", question: "Main purpose of memory hierarchy?", options: ["Optimize speed and cost", "Add data", "Subtract data", "Perform logic"], answer: "Optimize speed and cost", explanation: "Memory hierarchy balances speed and cost using fast & expensive and slow & cheap memories." },
{ category: "Memory Circuits", question: "Sequential vs random memory access pattern?", options: ["Sequential = consecutive, Random = any location", "Sequential = any location, Random = consecutive", "Both same", "Depends"], answer: "Sequential = consecutive, Random = any location", explanation: "Sequential access = consecutive addresses; Random access = any address." },
{ category: "Memory Circuits", question: "Full form of ROM?", options: ["Read Only Memory", "Random Operation Memory", "Register Output Memory", "Rapid Access Memory"], answer: "Read Only Memory", explanation: "ROM = Read Only Memory." },
{ category: "Memory Circuits", question: "What does memory address space define?", options: ["Maximum addressable memory", "Word length", "Registers", "Cache only"], answer: "Maximum addressable memory", explanation: "Address space defines maximum memory accessible by CPU." },
{ category: "Memory Circuits", question: "Full form of PROM?", options: ["Programmable Read Only Memory", "Primary ROM", "Permanent ROM", "Parallel ROM"], answer: "Programmable Read Only Memory", explanation: "PROM is a type of ROM that can be programmed by the user." },
{ category: "Memory Circuits", question: "Meaning of memory throughput?", options: ["Amount of data transferred per second", "Access time", "Word length", "Bus width"], answer: "Amount of data transferred per second", explanation: "Memory throughput is the rate of data transfer per second." },
{ category: "Memory Circuits", question: "Main use of SRAM?", options: ["Cache memory", "Hard disk", "ROM", "Registers"], answer: "Cache memory", explanation: "SRAM is used in CPU caches for fast access." },
{ category: "Memory Circuits", question: "Feature of dynamic RAM (DRAM)?", options: ["Needs periodic refresh", "Stable without refresh", "Non-volatile", "Random logic"], answer: "Needs periodic refresh", explanation: "DRAM capacitors lose charge, so periodic refresh is required." },
{ category: "Memory Circuits", question: "Meaning of word length?", options: ["Number of bits in a memory word", "Memory size", "Address lines", "Bus width"], answer: "Number of bits in a memory word", explanation: "Word length = number of bits in a memory word." },
{ category: "Memory Circuits", question: "What happens during a memory read operation?", options: ["Data is transferred from memory to CPU", "CPU writes data", "Data is deleted", "Perform arithmetic"], answer: "Data is transferred from memory to CPU", explanation: "Read operation transfers data from memory to CPU." },
{ category: "Memory Circuits", question: "What happens during a memory write operation?", options: ["CPU stores data into memory", "Data is deleted from CPU", "Only logic operation", "Compare data"], answer: "CPU stores data into memory", explanation: "Write operation stores CPU data into memory." },
{ category: "Memory Circuits", question: "Is RAM volatile or non-volatile?", options: ["Volatile", "Non-volatile", "Both", "Depends"], answer: "Volatile", explanation: "RAM loses data when power is turned off." },
{ category: "Memory Circuits", question: "Full form of bit?", options: ["Binary digit", "Binary integer", "Basic integer", "Byte index"], answer: "Binary digit", explanation: "Bit = Binary digit, the basic unit of memory." },
{ category: "Memory Circuits", question: "How many bits are in a byte?", options: ["8", "4", "16", "2"], answer: "8", explanation: "1 byte = 8 bits." },
{ category: "Memory Circuits", question: "Role of a memory address?", options: ["Identify a unique location", "Add data", "Subtract data", "Perform logic"], answer: "Identify a unique location", explanation: "Each memory word has a unique address." },
{ category: "Memory Circuits", question: "Main component of a memory cell?", options: ["Flip-flop or transistor-capacitor", "Adder", "Multiplexer", "Decoder"], answer: "Flip-flop or transistor-capacitor", explanation: "Memory cell uses flip-flop or capacitor to store 1 bit." },
{ category: "Memory Circuits", question: "Example of secondary memory?", options: ["Hard disk, SSD", "RAM", "Registers", "Cache"], answer: "Hard disk, SSD", explanation: "Secondary memory is non-volatile, e.g., HDD, SSD." },
{ category: "Memory Circuits", question: "Types of primary memory?", options: ["RAM & ROM", "Cache & Registers", "Hard Disk", "Flash only"], answer: "RAM & ROM", explanation: "Primary memory includes RAM and ROM." },


  // Add more questions to reach 50+ following same structure
];

let score = 0;
let wrongCount = 0;
let currentQuestion;
let currentQuestionIndex = 0;
let categoryQuestions = [];
let timer;
let timeLeft = 30;
let isRandomMode = false;
let selectedCategoryName = "";

// High Score Load on Start
let highScore = localStorage.getItem("highScore") || 0;
document.getElementById("highscore").textContent = `🔥 Highest Score: ${highScore}`;

// Update High Score
function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    document.getElementById("highscore").textContent = `🔥 Highest Score: ${highScore}`;
  }
}

// DOM Elements
const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const explanationDiv = document.getElementById("explanation");
const nextBtn = document.getElementById("next");
const scoreDiv = document.getElementById("score");
const wrongDiv = document.getElementById("wrong");
const timerDiv = document.getElementById("timer");
const shareBtn = document.getElementById("share-btn");

// ===== Fullscreen =====
function openFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) elem.requestFullscreen();
  else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
  else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
}

// ===== Shuffle Helper =====
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===== Start Quiz =====
function startQuiz(category) {
  score = 0;
  wrongCount = 0;
  selectedCategoryName = category;

  scoreDiv.textContent = `Score: ${score}`;
  wrongDiv.textContent = `Wrong: ${wrongCount}`;

  if (category === "Random") {
    isRandomMode = true;
    categoryQuestions = shuffleArray([...questionsDB]);

    // --- Restore Progress for Random also ---
    let savedIndex = localStorage.getItem("progress_Random");
    if (savedIndex && savedIndex < categoryQuestions.length) {
      currentQuestionIndex = parseInt(savedIndex);
    } else {
      currentQuestionIndex = 0;
    }

  } else {
    isRandomMode = false;
    categoryQuestions = shuffleArray(questionsDB.filter(q => q.category === category));

    let savedIndex = localStorage.getItem("progress_" + category);
    if (savedIndex && savedIndex < categoryQuestions.length) {
      currentQuestionIndex = parseInt(savedIndex);
    } else {
      currentQuestionIndex = 0;
    }
  }

  showQuestion(categoryQuestions[currentQuestionIndex]);
}

// ===== Show Question =====
function showQuestion(q) {
  clearInterval(timer);
  timeLeft = 30;
  timerDiv.textContent = `Time: ${timeLeft}s`;

  // Question number sequentially
  document.getElementById("question-number").textContent = `Q${currentQuestionIndex + 1}/${categoryQuestions.length}`;

  questionDiv.textContent = q.question;
  optionsDiv.innerHTML = "";
  explanationDiv.textContent = "";
  nextBtn.style.display = "none";

  const shuffledOptions = shuffleArray([...q.options]);
  shuffledOptions.forEach(opt => {
    const button = document.createElement("button");
    button.textContent = opt;
    button.className =
      "w-full py-3 px-4 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] text-gray-700 font-medium hover:bg-blue-100 transition";
    button.onclick = () => checkAnswer(opt, q);
    optionsDiv.appendChild(button);
  });

  timer = setInterval(() => {
    timeLeft--;
    timerDiv.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      disableOptions();
      wrongCount++;
      wrongDiv.textContent = `Wrong: ${wrongCount}`;
      highlightCorrect(q);
      explanationDiv.textContent = `Time up! Correct Answer: ${q.answer}\nExplanation: ${q.explanation}`;
      nextBtn.style.display = "block";
    }
  }, 1000);
}

// ===== Disable Options =====
function disableOptions() {
  optionsDiv.querySelectorAll("button").forEach(b => {
    b.disabled = true;
    b.onclick = null;
    b.classList.add("opacity-50", "cursor-not-allowed");
  });
}

// ===== Highlight Correct / Wrong =====
function highlightCorrect(q, selected = null) {
  optionsDiv.querySelectorAll("button").forEach(btn => {
    if (btn.textContent === q.answer) {
      btn.classList.remove("bg-white", "hover:bg-blue-100", "text-gray-700");
      btn.classList.add("bg-green-500", "text-white");
    }
    if (selected && btn.textContent === selected && selected !== q.answer) {
      btn.classList.remove("bg-white", "hover:bg-blue-100", "text-gray-700");
      btn.classList.add("bg-red-500", "text-white");
    }
  });
}

// ===== Check Answer =====
function checkAnswer(selected, q) {
  clearInterval(timer);
  disableOptions();
  highlightCorrect(q, selected);

  if (selected === q.answer) {
    score++;
    explanationDiv.textContent = `Correct! ✅\nExplanation: ${q.explanation}`;
  } else {
    wrongCount++;
    explanationDiv.textContent = `Wrong! ❌\nCorrect Answer: ${q.answer}\nExplanation: ${q.explanation}`;
  }

  scoreDiv.textContent = `Score: ${score}`;
  wrongDiv.textContent = `Wrong: ${wrongCount}`;
  nextBtn.style.display = "block";
  showShareButton();
  updateHighScore();
}

// ===== Next Button =====
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  // --- Save Progress (Normal + Random) ---
  if (isRandomMode) {
    localStorage.setItem("progress_Random", currentQuestionIndex);
  } else {
    localStorage.setItem("progress_" + selectedCategoryName, currentQuestionIndex);
  }

  if (currentQuestionIndex < categoryQuestions.length) {
    showQuestion(categoryQuestions[currentQuestionIndex]);
  } else {
    alert(`Quiz Completed! Your Score: ${score}`);

    // Reset progress if finished
    if (isRandomMode) {
      localStorage.removeItem("progress_Random");
    } else {
      localStorage.removeItem("progress_" + selectedCategoryName);
    }

    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
  }
});

// ===== Share Button =====
function showShareButton() {
  shareBtn.classList.remove("hidden");
}
shareBtn.addEventListener("click", () => {
  const total = score + wrongCount;
  const totalQuestions = categoryQuestions.length;
  const resultText = `🎯 Digital Electronics Quiz UPLT Result
✅ Score: ${score}
❌ Wrong: ${wrongCount}
📊 Total Solved Questions: ${total}/${totalQuestions}

Try it yourself! https://uplt.netlify.app/`;

  window.open(`https://wa.me/?text=${encodeURIComponent(resultText)}`, "_blank");
});

// ===== Home Category Buttons =====
document.querySelectorAll(".home-category").forEach(btn => {
  btn.addEventListener("click", () => {
    openFullscreen();
    const category = btn.dataset.category;
    const color = window.getComputedStyle(btn).backgroundColor;

    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    const selectedCategory = document.getElementById("selected-category");
    selectedCategory.textContent = category === "Random" ? "Random Mode" : category;
    selectedCategory.style.color = color;

    startQuiz(category);
  });
});

// ===== Side Navigation =====
const menuBtn = document.getElementById("menu-btn");
const sideNav = document.getElementById("side-nav");

menuBtn.addEventListener("click", () => {
  sideNav.classList.toggle("-translate-x-full");
});

document.querySelectorAll(".side-category").forEach(btn => {
  btn.addEventListener("click", () => {
    openFullscreen();
    const category = btn.dataset.category;
    const color = window.getComputedStyle(btn).backgroundColor;

    sideNav.classList.add("-translate-x-full");
    const selectedCategory = document.getElementById("selected-category");
    selectedCategory.textContent = category;
    selectedCategory.style.color = color;

    startQuiz(category);
  });
});

document.getElementById("random-btn").addEventListener("click", () => {
  openFullscreen();
  sideNav.classList.add("-translate-x-full");

  const selectedCategory = document.getElementById("selected-category");
  selectedCategory.textContent = "Random Mode";
  selectedCategory.style.color = "indigo";

  startQuiz("Random");
});

// ===== Dark / Light Mode Toggle =====
const toggleBtn = document.getElementById("dark-toggle");
const html = document.documentElement;

// Default text set karna (page load hone pe check)
if (html.classList.contains("dark")) {
  toggleBtn.textContent = "Light Mode";   // agar default dark ho toh Light Mode dikhaye
} else {
  toggleBtn.textContent = "Night Mode";   // agar default light ho toh Night Mode dikhaye
}

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    toggleBtn.textContent = "Light Mode";  // dark mode active → button "Light Mode"
  } else {
    toggleBtn.textContent = "Night Mode";  // light mode active → button "Night Mode"
  }
});

