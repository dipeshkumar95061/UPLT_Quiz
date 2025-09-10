const questionsDB = [
  // Number Systems
{ category: "Number Systems", question: "Binary 1010 ka decimal value kya hai?", options: ["8", "10", "12", "15"], answer: "10", explanation: "Binary 1010 = 8+0+2+0 = 10" },
{ category: "Number Systems", question: "Decimal 15 ka hexadecimal value?", options: ["F","E","D","C"], answer: "F", explanation: "15 decimal = F hex" },
{ category: "Number Systems", question: "Decimal 9 ka BCD code kya hai?", options: ["1001","1000","1010","0111"], answer: "1001", explanation: "9 decimal = 1001 BCD" },
{ category: "Number Systems", question: "Octal 31 ka decimal value?", options: ["25","26","24","23"], answer: "25", explanation: "Octal 31 = 25 decimal" },
{ category: "Number Systems", question: "Binary 111111 ka decimal value?", options: ["62", "63", "61", "64"], answer: "63", explanation: "111111 = 32+16+8+4+2+1 = 63" },
{ category: "Number Systems", question: "Decimal 5 ka Excess-3 code kya hai?", options: ["1000","0101","1010","0011"], answer: "1000", explanation: "Excess-3 = decimal + 3 = 5+3=8 → 1000" },
{ category: "Number Systems", question: "Binary 1001 ka Gray code kya hai?", options: ["1101","1100","1011","1010"], answer: "1101", explanation: "Binary to Gray conversion" },
{ category: "Number Systems", question: "Decimal 100 ka hexadecimal value?", options: ["64","65","63","62"], answer: "64", explanation: "100 decimal = 64 hex" },
{ category: "Number Systems", question: "Binary 1010 ka 1's complement kya hai?", options: ["0101","1010","0110","1001"], answer: "0101", explanation: "1's complement = invert all bits" },
{ category: "Number Systems", question: "Decimal 8 ka octal value kya hai?", options: ["10","11","12","7"], answer: "10", explanation: "8 decimal = 10 octal" },
{ category: "Number Systems", question: "Binary 111100 ka decimal value?", options: ["60", "61", "62", "63"], answer: "60", explanation: "111100 = 32+16+8+4 = 60" },
{ category: "Number Systems", question: "Decimal 15 ka BCD code kya hai?", options: ["0001 0101","0001 1111","0010 0101","0011 0100"], answer: "0001 0101", explanation: "15 decimal = 0001 0101 BCD" },
{ category: "Number Systems", question: "Hexadecimal 'FF' ka decimal value?", options: ["255","254","256","253"], answer: "255", explanation: "FF hex = 255 decimal" },
{ category: "Number Systems", question: "Binary 1101 ka 2's complement?", options: ["0011","0010","1101","0101"], answer: "0011", explanation: "2's complement = 1's complement +1" },
{ category: "Number Systems", question: "Decimal 64 ka octal value kya hai?", options: ["100","101","110","77"], answer: "100", explanation: "64 decimal = 100 octal" },
{ category: "Number Systems", question: "Octal 256 ka decimal value kya hai?", options: ["174","175","176","177"], answer: "174", explanation: "Octal 256 = 2*64+5*8+6=174" },
{ category: "Number Systems", question: "Binary 0110 ka Gray code kya hai?", options: ["0101","0100","0111","0110"], answer: "0101", explanation: "Binary 0110 → Gray 0101" },
{ category: "Number Systems", question: "Binary 101 + 011 =", options: ["1000","110","111","1010"], answer: "1000", explanation: "101+011=8 decimal=1000 binary" },
{ category: "Number Systems", question: "Decimal 3 ka 8421 code kya hai?", options: ["0011","0100","0110","0010"], answer: "0011", explanation: "8421 code" },
{ category: "Number Systems", question: "Binary 0011 ka 1's complement?", options: ["1100","0011","1110","1001"], answer: "1100", explanation: "1's complement = invert bits" },
{ category: "Number Systems", question: "Hexadecimal '2F' ka decimal value?", options: ["47","46","48","49"], answer: "47", explanation: "2F hex = 47 decimal" },
{ category: "Number Systems", question: "Octal 77 ka decimal value kya hai?", options: ["63","62","64","61"], answer: "63", explanation: "Octal 77 = 7*8+7=63" },
{ category: "Number Systems", question: "Decimal 12 ka BCD code kya hai?", options: ["0001 0010","0010 0100","0011 0001","0001 0011"], answer: "0001 0010", explanation: "12 decimal = 0001 0010 BCD" },
{ category: "Number Systems", question: "Binary 11010 ka decimal value?", options: ["24", "26", "28", "22"], answer: "26", explanation: "11010 = 16+8+0+2+0 = 26" },
{ category: "Number Systems", question: "Hexadecimal '1F' ka decimal value?", options: ["31","30","32","33"], answer: "31", explanation: "Hex 1F = 31 decimal" },
{ category: "Number Systems", question: "Binary 101101 ka decimal value?", options: ["45", "43", "41", "47"], answer: "45", explanation: "101101 = 32+0+8+4+0+1 = 45" },
{ category: "Number Systems", question: "Decimal 7 ka 8421 code kya hai?", options: ["0111","1110","1000","1011"], answer: "0111", explanation: "7 decimal = 0111 in 8421 code" },
{ category: "Number Systems", question: "Binary 100000 ka decimal value?", options: ["32", "31", "33", "30"], answer: "32", explanation: "100000 = 32" },
{ category: "Number Systems", question: "Decimal 11 ka BCD code kya hai?", options: ["0001 0001","0001 1011","0001 0011","0010 0001"], answer: "0001 0001", explanation: "11 decimal = 0001 0001 BCD" },
{ category: "Number Systems", question: "Binary 1001 ka 2's complement?", options: ["0111","0110","1001","0101"], answer: "0111", explanation: "2's complement = 1's complement +1" },
{ category: "Number Systems", question: "Binary 100111 ka decimal value?", options: ["38", "39", "40", "41"], answer: "39", explanation: "100111 = 32+0+0+4+2+1 = 39" },
{ category: "Number Systems", question: "Binary 1100 ka Gray code kya hai?", options: ["1010","1110","1000","1100"], answer: "1010", explanation: "Gray code conversion formula applied" },
{ category: "Number Systems", question: "Binary 0101 ka 2's complement?", options: ["1011","1010","0101","1001"], answer: "1011", explanation: "2's complement = 1's complement +1" },
{ category: "Number Systems", question: "Hexadecimal '10' ka decimal value?", options: ["16","15","17","18"], answer: "16", explanation: "Hex 10 = 16 decimal" },
{ category: "Number Systems", question: "Binary 1111 ka decimal value kya hai?", options: ["14", "15", "16", "13"], answer: "15", explanation: "1111 = 8+4+2+1 = 15" },

  
  // Boolean Algebra
  { category: "Boolean Algebra", question: "De Morgan theorem kya kehta hai?", options: ["(A+B)' = A'B'", "(AB)' = A'+B'", "A+B = AB'", "None"], answer: "(A+B)' = A'B'", explanation: "(A+B)' = A'B', aur (AB)' = A'+B'" },
// Boolean Algebra Randomized Questions 1-100
{ category: "Boolean Algebra", question: "Simplify: AB + A'B + AB'", options: ["A + B", "A + B'", "AB", "1"], answer: "A + B", explanation: "Consensus theorem: AB + A'B + AB' = A + B" },
{ category: "Boolean Algebra", question: "Kya A + AB = A?", options: ["Yes", "No"], answer: "Yes", explanation: "Absorption Law: A + AB = A" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A + B')", options: ["A", "B", "A+B", "B'"], answer: "A", explanation: "(A + B)(A + B') = A" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + C)", options: ["AC + A'B", "A + B + C", "AB + AC", "A' + B + C"], answer: "AC + A'B", explanation: "Distribute and apply rules" },
{ category: "Boolean Algebra", question: "Boolean expression simplify karo: A + AB", options: ["A", "B", "AB", "A+B"], answer: "A", explanation: "A + AB = A(1+B) = A" },
{ category: "Boolean Algebra", question: "Simplify: (A + B + C)'", options: ["A'B'C'", "AB'C'", "A'B'C", "ABC"], answer: "A'B'C'", explanation: "De Morgan: invert all and AND" },
{ category: "Boolean Algebra", question: "Boolean expression simplify karo: AB + A'B", options: ["B", "A", "AB", "A+B"], answer: "B", explanation: "AB + A'B = B(A+A') = B" },
{ category: "Boolean Algebra", question: "Simplify using Demorgan: (A + B + C)'", options: ["A'B'C'", "AB'C'", "A'B'C", "ABC"], answer: "A'B'C'", explanation: "Invert all terms and AND" },
{ category: "Boolean Algebra", question: "Kya A * A' = 0?", options: ["Yes", "No"], answer: "Yes", explanation: "A * A' = 0 (Complement Law)" },
{ category: "Boolean Algebra", question: "Simplify: AB + AB'", options: ["A", "B", "AB", "B'"], answer: "A", explanation: "AB + AB' = A(B+B') = A" },
{ category: "Boolean Algebra", question: "Simplify: (A' + B)(A + B')", options: ["AB + A'B'", "A + B", "A'B + AB'", "A' + B'"], answer: "AB + A'B'", explanation: "XOR equivalence" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(B + C)(A + C)", options: ["AB + AC + BC", "A+B+C", "A", "B"], answer: "AB + AC + BC", explanation: "Consensus theorem" },
{ category: "Boolean Algebra", question: "Boolean expression simplify karo: A + A'B", options: ["A+B", "B", "A", "AB"], answer: "A+B", explanation: "A + A'B = (A+B)" },
{ category: "Boolean Algebra", question: "Kya A + A' = 1?", options: ["Yes", "No"], answer: "Yes", explanation: "Complement Law: A + A' = 1" },
{ category: "Boolean Algebra", question: "Simplify: A(B + C)", options: ["AB + AC", "A + B + C", "ABC", "A + BC"], answer: "AB + AC", explanation: "Distributive law: A(B+C) = AB + AC" },
{ category: "Boolean Algebra", question: "Simplify: (AB)'", options: ["A'+B'", "(A+B)'", "A'B'", "AB"], answer: "A'+B'", explanation: "(AB)' = A' + B' (De Morgan)" },
{ category: "Boolean Algebra", question: "Simplify: (A ⊕ B) ⊕ B", options: ["A", "B", "A ⊕ B", "0"], answer: "A", explanation: "XOR is associative: (A⊕B)⊕B = A" },
{ category: "Boolean Algebra", question: "SOP form of F = Σm(1,3,5)", options: ["A'B + AB' + ...", "A+B+C", "AB + AC + BC", "1"], answer: "A'B + AB' + ...", explanation: "Sum of products: use minterms" },
{ category: "Boolean Algebra", question: "Simplify: (A' + B)(B' + C)", options: ["A'C + B'B", "A'C + B'C", "A'B + BC", "A'B + AC"], answer: "A'C + B'C", explanation: "Distributive law applied" },
{ category: "Boolean Algebra", question: "Boolean expression simplify: AB + A'B", options: ["B", "A", "AB", "A+B"], answer: "B", explanation: "AB + A'B = B(A+A') = B" },

// 21-40
{ category: "Boolean Algebra", question: "Simplify: A + AB + AC", options: ["A", "AB + AC", "A + B + C", "AC + AB"], answer: "A", explanation: "A + AB + AC = A(1+B+C)=A" },
{ category: "Boolean Algebra", question: "Simplify: AB + A'B", options: ["B", "A", "AB", "A+B"], answer: "B", explanation: "AB + A'B = B(A+A') = B" },
{ category: "Boolean Algebra", question: "Simplify: A + A'B + AB'", options: ["A + B", "B", "A", "1"], answer: "A + B", explanation: "Combine using distributive law" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + C)", options: ["AC + A'B", "A + B + C", "AB + AC", "A' + B + C"], answer: "AC + A'B", explanation: "Distribute and apply rules" },
{ category: "Boolean Algebra", question: "Simplify: AB + AB' + A'B", options: ["A + B", "B", "A", "1"], answer: "A + B", explanation: "Consensus theorem: AB + AB' + A'B = A + B" },
{ category: "Boolean Algebra", question: "Simplify: (A + B')(A' + B)", options: ["A'B' + AB", "A+B", "A'B + AB'", "A + B'"], answer: "A'B' + AB", explanation: "Apply distributive law and simplify" },
{ category: "Boolean Algebra", question: "Simplify: A + A'BC", options: ["A + BC", "A + B + C", "AC", "A"], answer: "A + BC", explanation: "A + A'BC = (A + B)(A + C) = A + BC" },
{ category: "Boolean Algebra", question: "Simplify: AB + A'C + BC", options: ["AB + A'C + BC", "A + B + C", "AC + B", "1"], answer: "AB + A'C + BC", explanation: "No further simplification possible" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(B + C)(A + C)", options: ["AB + AC + BC", "A + B + C", "A", "B"], answer: "AB + AC + BC", explanation: "Apply distributive law and combine terms" },
{ category: "Boolean Algebra", question: "Simplify: (A + B + C)'", options: ["A'B'C'", "AB'C'", "A'B'C", "ABC"], answer: "A'B'C'", explanation: "De Morgan: invert all and AND" },

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
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + C)(B + C')", options: ["AC + B'C'", "AB + AC", "A + B + C", "1"], answer: "AC + B'C'", explanation: "Apply distributive and absorption laws" },
{ category: "Boolean Algebra", question: "Simplify: A + A'B + AC", options: ["A + B", "A + C", "B + C", "A"], answer: "A + B", explanation: "Consensus theorem: A + A'B + AC = A + B" },
{ category: "Boolean Algebra", question: "Simplify: A ⊕ 0", options: ["A", "0", "1", "A'"], answer: "A", explanation: "XOR with 0: A ⊕ 0 = A" },
{ category: "Boolean Algebra", question: "Simplify: A ⊕ 1", options: ["A'", "A", "1", "0"], answer: "A'", explanation: "XOR with 1: A ⊕ 1 = A'" },

// 81-100
{ category: "Boolean Algebra", question: "Simplify: A ⊕ A", options: ["0", "1", "A", "A'"], answer: "0", explanation: "XOR same variable: A ⊕ A = 0" },
{ category: "Boolean Algebra", question: "Simplify: A ⊕ B ⊕ B", options: ["A", "B", "A ⊕ B", "0"], answer: "A", explanation: "XOR is associative: A ⊕ B ⊕ B = A" },
{ category: "Boolean Algebra", question: "Simplify: (A ⊕ B)'", options: ["A ⊕ B'", "A XNOR B", "AB + A'B'", "A + B"], answer: "A XNOR B", explanation: "Complement of XOR is XNOR" },
{ category: "Boolean Algebra", question: "POS form of F = ΠM(0,2,4)", options: ["(A+B)(A'+C)...", "(A+B+C)", "(AB + AC)", "(A'+B')(A+C')"], answer: "(A'+B')(A+C')", explanation: "Product of sums: use maxterms" },
{ category: "Boolean Algebra", question: "SOP: F(A,B) = Σm(0,2)", options: ["A'B' + AB'", "AB + A'B", "A + B", "AB"], answer: "A'B' + AB'", explanation: "Combine minterms to form SOP" },
{ category: "Boolean Algebra", question: "POS: F(A,B) = ΠM(1,3)", options: ["(A + B)(A' + B')", "(A + B') (A'+B)", "(AB + A'B')", "A + B"], answer: "(A + B') (A'+B)", explanation: "Use maxterms to form POS" },
{ category: "Boolean Algebra", question: "SOP to POS: F = A'B + AB'", options: ["(A+B)(A'+B')", "(A+B')(A'+B)", "(AB+ A'B')", "A + B"], answer: "(A+B')(A'+B)", explanation: "Convert SOP to POS using duality" },
{ category: "Boolean Algebra", question: "Simplify: AB + A'B + AB'", options: ["A + B", "A + B'", "AB", "1"], answer: "A + B", explanation: "Consensus theorem: AB + A'B + AB' = A + B" },
{ category: "Boolean Algebra", question: "Simplify: (A + B)(A' + B')(A + C)", options: ["AC + B'C'", "A + B + C", "AB + AC", "1"], answer: "AC + B'C'", explanation: "Distributive & absorption applied" },
{ category: "Boolean Algebra", question: "Simplify: A + AB + ABC", options: ["A", "AB", "B", "ABC"], answer: "A", explanation: "Absorption law: A + AB + ABC = A" },
{ category: "Boolean Algebra", question: "Simplify using Demorgan: (A + B + C)'", options: ["A'B'C'", "AB'C'", "A'B'C", "ABC"], answer: "A'B'C'", explanation: "Invert all terms and AND" },
{ category: "Boolean Algebra", question: "Simplify: (A ⊕ B) ⊕ B", options: ["A", "B", "A ⊕ B", "0"], answer: "A", explanation: "XOR is associative: (A⊕B)⊕B = A" },


  // Logic Gates
{ category: "Logic Gates", question: "OR gate ka symbol kya hai?", options: ["&", "|", ">", "<"], answer: "|", explanation: "OR gate ka symbol '|' hai." },
{ category: "Logic Gates", question: "XOR gate ka output tab 1 hoga?", options: ["Jab inputs different ho", "Jab inputs same ho", "Hamesha 1", "Kabhi nahi"], answer: "Jab inputs different ho", explanation: "XOR = 1 only if inputs are different" },

{ category: "Logic Gates", question: "3-input AND gate output 1 kitni conditions me hoga?", options: ["1", "2", "3", "7"], answer: "1", explanation: "All 3 inputs must be 1" },

{ category: "Logic Gates", question: "Simplify: (AB)'", options: ["A' + B'", "AB", "A + B", "A'B"], answer: "A' + B'", explanation: "DeMorgan's law" },

{ category: "Logic Gates", question: "NOR only circuit: implement AND gate", options: ["((A NOR A) NOR (B NOR B)) NOR ((A NOR A) NOR (B NOR B))","A NOR B","A NOR A","B NOR B"], answer: "((A NOR A) NOR (B NOR B)) NOR ((A NOR A) NOR (B NOR B))", explanation: "NOR to AND using double NOR" },

{ category: "Logic Gates", question: "Half-adder ka sum output?", options: ["A XOR B", "A AND B", "A OR B", "A NAND B"], answer: "A XOR B", explanation: "Half-adder sum = A XOR B" },

{ category: "Logic Gates", question: "Fan-out of a gate defines:", options: ["Number of inputs it can drive", "Number of outputs", "Delay", "Voltage level"], answer: "Number of inputs it can drive", explanation: "Fan-out = max inputs a gate can drive without degradation" },

{ category: "Logic Gates", question: "NAND gate ka output kab 0 hota hai?", options: ["Jab dono inputs 1 ho", "Jab dono inputs 0 ho", "Kabhi nahi", "Hamesha 1"], answer: "Jab dono inputs 1 ho", explanation: "NAND = NOT(AND); output 0 only when all inputs = 1" },

{ category: "Logic Gates", question: "2-input XNOR ka truth table me 1 kitni baar aata hai?", options: ["2", "1", "3", "4"], answer: "2", explanation: "Input 00,11 → output 1" },

{ category: "Logic Gates", question: "Flip-flop reset input does?", options: ["Clears output to 0", "Sets output to 1", "Toggles output", "No effect"], answer: "Clears output to 0", explanation: "Reset input forces output 0" },

{ category: "Logic Gates", question: "Buffer gate ka use kya hai?", options: ["Signal strengthen", "Invert signal", "Add two signals", "Reduce voltage"], answer: "Signal strengthen", explanation: "Buffer output = input, mainly used to strengthen signal" },

{ category: "Logic Gates", question: "Logic minimization ka purpose?", options: ["Reduce gate count", "Increase power", "Increase delay", "Store data"], answer: "Reduce gate count", explanation: "Simplifying Boolean reduces circuit complexity" },

{ category: "Logic Gates", question: "Simplify: A + AB", options: ["A", "B", "AB", "A+B"], answer: "A", explanation: "Absorption law: A + AB = A" },

{ category: "Logic Gates", question: "OR gate 2 input ka truth table me output 0 kitni baar hoga?", options: ["1", "2", "3", "4"], answer: "1", explanation: "Only for input 00, output =0" },

{ category: "Logic Gates", question: "T flip-flop toggles when?", options: ["T=1", "T=0", "Always", "Never"], answer: "T=1", explanation: "T flip-flop toggles when T=1 at clock" },

{ category: "Logic Gates", question: "2-input XOR ka truth table me 1 kitni baar aata hai?", options: ["2", "1", "3", "4"], answer: "2", explanation: "Input 01,10 → output 1" },

{ category: "Logic Gates", question: "NAND only circuit: implement OR gate", options: ["(A NAND A) NAND (B NAND B)", "(A NAND B) NAND (A NAND B)", "A NAND A", "B NAND B"], answer: "(A NAND A) NAND (B NAND B)", explanation: "DeMorgan's law: OR from NAND" },

{ category: "Logic Gates", question: "Half-adder ka carry output?", options: ["A AND B", "A OR B", "A XOR B", "A NAND B"], answer: "A AND B", explanation: "Half-adder carry = A AND B" },

{ category: "Logic Gates", question: "Fan-out of a gate defines?", options: ["Number of inputs it can drive", "Number of outputs", "Delay", "Voltage level"], answer: "Number of inputs it can drive", explanation: "Fan-out = max inputs a gate can drive without degradation" },

{ category: "Logic Gates", question: "Simplify: AB + A'B", options: ["B", "A", "AB", "A+B"], answer: "B", explanation: "Consensus theorem" },

{ category: "Logic Gates", question: "Full-adder ka sum output?", options: ["A XOR B XOR Cin", "A AND B AND Cin", "A OR B OR Cin", "A NAND B NAND Cin"], answer: "A XOR B XOR Cin", explanation: "Sum = XOR of all three inputs" },
{ category: "Logic Gates", question: "OR gate ka output kab 0 hoga?", options: ["Jab dono inputs 0 ho", "Jab ek input 1 ho", "Kabhi nahi", "Hamesha 0"], answer: "Jab dono inputs 0 ho", explanation: "OR gate output = 0 only if all inputs = 0" },

{ category: "Logic Gates", question: "XNOR gate ka output kab 1 hoga?", options: ["Jab inputs same ho", "Jab inputs different ho", "Hamesha 1", "Kabhi nahi"], answer: "Jab inputs same ho", explanation: "XNOR = 1 only if inputs are same" },

{ category: "Logic Gates", question: "Logic gate which gives high only when odd number of inputs are high?", options: ["XOR", "AND", "OR", "NOR"], answer: "XOR", explanation: "XOR = 1 for odd number of 1s" },

{ category: "Logic Gates", question: "Simplify: A(A+B)", options: ["A", "B", "AB", "A+B"], answer: "A", explanation: "Distributive law: A(A+B)=A" },

{ category: "Logic Gates", question: "Propagation delay of a gate is:", options: ["Time to change output after input changes", "Time to switch on", "Time to consume power", "Gate size"], answer: "Time to change output after input changes", explanation: "Propagation delay = input to output change delay" },

{ category: "Logic Gates", question: "Simplify: AB + AB'", options: ["A", "B", "AB", "A+B"], answer: "A", explanation: "A(B+B')=A" },

{ category: "Logic Gates", question: "D flip-flop output follows?", options: ["D input on clock edge", "Inverted input", "Toggle input", "Sum input"], answer: "D input on clock edge", explanation: "D flip-flop stores D at clock" },

{ category: "Logic Gates", question: "Logic level 0 voltage typically is:", options: ["0V", "1V", "5V", "3.3V"], answer: "0V", explanation: "Logic 0 ≈ 0V" },

{ category: "Logic Gates", question: "Logic level 1 voltage typically is:", options: ["5V", "0V", "3V", "1V"], answer: "5V", explanation: "Logic 1 ≈ 5V (TTL standard)" },

{ category: "Logic Gates", question: "Simplify: (A+B)'", options: ["A'B'", "AB", "A+B", "A' + B"], answer: "A'B'", explanation: "DeMorgan's law" },

{ category: "Logic Gates", question: "Edge-triggered flip-flop changes output on?", options: ["Clock edge", "Input change", "Always", "Reset"], answer: "Clock edge", explanation: "Edge-triggered flip-flop responds to clock rising/falling edge" },

{ category: "Logic Gates", question: "NOR gate with same inputs acts as:", options: ["NOT", "AND", "OR", "XOR"], answer: "NOT", explanation: "A NOR A = NOT A" },

{ category: "Logic Gates", question: "Sum of minterms represents?", options: ["OR of ANDs", "AND of ORs", "XOR of inputs", "Buffer"], answer: "OR of ANDs", explanation: "Canonical SOP form" },

{ category: "Logic Gates", question: "Product of maxterms represents?", options: ["AND of ORs", "OR of ANDs", "XOR of inputs", "Buffer"], answer: "AND of ORs", explanation: "Canonical POS form" },

{ category: "Logic Gates", question: "Number of minterms for 3-variable function?", options: ["8", "3", "4", "2"], answer: "8", explanation: "2^3 = 8 minterms" },

{ category: "Logic Gates", question: "Number of maxterms for 3-variable function?", options: ["8", "3", "4", "2"], answer: "8", explanation: "2^3 = 8 maxterms" },

{ category: "Logic Gates", question: "Simplify: A + A'B + AB'", options: ["A + B", "B", "A", "A + B'"], answer: "A + B", explanation: "Consensus theorem" },

{ category: "Logic Gates", question: "NOR only circuit: implement OR gate", options: ["(A NOR A) NOR (B NOR B)", "A NOR B", "(A NOR A) NOR A", "B NOR B"], answer: "(A NOR A) NOR (B NOR B)", explanation: "NOR as OR via DeMorgan" },

{ category: "Logic Gates", question: "JK flip-flop toggle condition?", options: ["J=1,K=1", "J=0,K=0", "J=1,K=0", "J=0,K=1"], answer: "J=1,K=1", explanation: "JK flip-flop toggles when J=K=1" },

{ category: "Logic Gates", question: "Counters are made using?", options: ["Flip-flops", "AND gates", "OR gates", "Buffers"], answer: "Flip-flops", explanation: "Counters = sequence of flip-flops" },

{ category: "Logic Gates", question: "Multiplexer ka main function?", options: ["Select one input from many", "Add two numbers", "Store data", "Invert signal"], answer: "Select one input from many", explanation: "MUX selects one input based on select lines" },

{ category: "Logic Gates", question: "Demultiplexer ka main function?", options: ["Send one input to multiple outputs", "Add two numbers", "Store data", "Invert signal"], answer: "Send one input to multiple outputs", explanation: "DEMUX routes input to selected output" },

{ category: "Logic Gates", question: "2:1 MUX select lines?", options: ["1", "2", "0", "3"], answer: "1", explanation: "2:1 MUX requires 1 select line" },

{ category: "Logic Gates", question: "4:1 MUX select lines?", options: ["2", "1", "3", "4"], answer: "2", explanation: "4 inputs → 2 select lines" },

{ category: "Logic Gates", question: "Simplify: A ⊕ 0", options: ["A", "0", "1", "A'"], answer: "A", explanation: "XOR with 0" },

{ category: "Logic Gates", question: "Simplify: A ⊕ A", options: ["0", "1", "A", "A'"], answer: "0", explanation: "XOR with same variable" },

{ category: "Logic Gates", question: "Master-Slave flip-flop ka purpose?", options: ["Avoid race condition", "Store sum", "Select input", "Buffer signal"], answer: "Avoid race condition", explanation: "Master-Slave flip-flop prevents output change during clock pulse" },

{ category: "Logic Gates", question: "Asynchronous counter is triggered by?", options: ["Output of previous flip-flop", "Clock directly", "Input data", "Reset"], answer: "Output of previous flip-flop", explanation: "Asynchronous counter = ripple counter" },

{ category: "Logic Gates", question: "Synchronous counter is triggered by?", options: ["Common clock", "Output of previous flip-flop", "Input data", "Reset"], answer: "Common clock", explanation: "All flip-flops triggered simultaneously" },

{ category: "Logic Gates", question: "Ring counter is?", options: ["Shift register with feedback", "Memory array", "Adder circuit", "Buffer circuit"], answer: "Shift register with feedback", explanation: "Ring counter = circular shift register" },

{ category: "Logic Gates", question: "Johnson counter is?", options: ["Shift register with inverted feedback", "Memory array", "Adder circuit", "Buffer circuit"], answer: "Shift register with inverted feedback", explanation: "Johnson counter = twisted ring counter" },

{ category: "Logic Gates", question: "Which gate is called a universal gate?", options: ["NAND & NOR", "AND & OR", "XOR & XNOR", "NOT"], answer: "NAND & NOR", explanation: "Any logic can be implemented using NAND or NOR only" },

{ category: "Logic Gates", question: "How many logic gates are required to implement AND using NAND only?", options: ["2", "1", "3", "4"], answer: "2", explanation: "First NAND gives AB', second NAND with itself gives AB" },

{ category: "Logic Gates", question: "How many logic gates are required to implement OR using NOR only?", options: ["2", "1", "3", "4"], answer: "2", explanation: "Apply DeMorgan's: OR = NOR inputs inverted" },

{ category: "Logic Gates", question: "NAND gate with same inputs acts as:", options: ["NOT", "AND", "OR", "XOR"], answer: "NOT", explanation: "A NAND A = NOT A" },

{ category: "Logic Gates", question: "Logic diagram representation uses?", options: ["Standard symbols", "Colors", "Numbers", "Wires only"], answer: "Standard symbols", explanation: "Logic gates have standard symbolic representation" },

{ category: "Logic Gates", question: "Hazards occur due to:", options: ["Propagation delays", "Gate count", "Power supply", "None"], answer: "Propagation delays", explanation: "Due to different arrival of signals at inputs" },

{ category: "Logic Gates", question: "Static hazard is:", options: ["Temporary unwanted change in output when it should remain constant", "Permanent output error", "Power loss", "High temperature"], answer: "Temporary unwanted change in output when it should remain constant", explanation: "Static hazard = unwanted pulse" },

{ category: "Logic Gates", question: "Dynamic hazard occurs in:", options: ["Multiple transitions on output when input changes once", "No output change", "Power surge", "Gate failure"], answer: "Multiple transitions on output when input changes once", explanation: "Dynamic hazard = multiple glitches" },

{ category: "Logic Gates", question: "Rise time in a gate is:", options: ["Time output goes 0→1", "Time input goes 0→1", "Time output goes 1→0", "Total delay"], answer: "Time output goes 0→1", explanation: "Rise time = output 0→1 transition time" },

{ category: "Logic Gates", question: "Fall time in a gate is:", options: ["Time output goes 1→0", "Time input goes 1→0", "Time output goes 0→1", "Total delay"], answer: "Time output goes 1→0", explanation: "Fall time = output 1→0 transition time" },


  // Combinational Circuits
{ category: "Combinational Circuits", question: "Half adder output ka kya hota hai?", options: ["Sum & Carry", "Only Sum", "Only Carry", "None"], answer: "Sum & Carry", explanation: "Half adder me sum aur carry dono output hote hain." },
{ category: "Combinational Circuits", question: "Full subtractor ka difference output?", options: ["A XOR B XOR Bin","A AND B","A OR B","A NAND B"], answer: "A XOR B XOR Bin", explanation: "Difference = A XOR B XOR Bin" },
{ category: "Combinational Circuits", question: "Half adder ka carry output ka Boolean expression?", options: ["A AND B","A OR B","A XOR B","A NOR B"], answer: "A AND B", explanation: "Carry = A AND B" },
{ category: "Combinational Circuits", question: "Enable pin ka function decoder/mux me?", options: ["Enable/disable operation","Add numbers","Subtract numbers","Compare numbers"], answer: "Enable/disable operation", explanation: "Enable pin controls circuit operation" },
{ category: "Combinational Circuits", question: "4-bit comparator outputs?", options: ["A>B, A<B, A=B","Sum & Carry","Only Sum","Only Carry"], answer: "A>B, A<B, A=B", explanation: "3 outputs for magnitude comparison" },
{ category: "Combinational Circuits", question: "Priority encoder ka use?", options: ["Highest priority input detection","Store data","Add numbers","Subtract numbers"], answer: "Highest priority input detection", explanation: "Priority encoder outputs code of highest priority active input" },
{ category: "Combinational Circuits", question: "4-to-1 multiplexer ka Boolean expression?", options: ["Y = A'B'C'D0 + ...","Y = AB + CD","Y = A XOR B","Y = A AND B"], answer: "Y = A'B'C'D0 + ...", explanation: "Sum of products for 4 inputs" },
{ category: "Combinational Circuits", question: "Half subtractor ka borrow output?", options: ["A'B","AB","A XOR B","A OR B"], answer: "A'B", explanation: "Borrow = A' AND B" },
{ category: "Combinational Circuits", question: "Full adder ka carry output expression?", options: ["AB + BCin + ACin","A XOR B","A OR B","A AND B"], answer: "AB + BCin + ACin", explanation: "Carry = AB + BCin + ACin" },
{ category: "Combinational Circuits", question: "ALU me flags ka purpose?", options: ["Indicate carry, zero, overflow","Store data","Invert input","Select operation"], answer: "Indicate carry, zero, overflow", explanation: "Flags = status of result" },
{ category: "Combinational Circuits", question: "Half adder ka sum output ka Boolean expression?", options: ["A XOR B","A AND B","A OR B","A NAND B"], answer: "A XOR B", explanation: "Sum = A XOR B" },
{ category: "Combinational Circuits", question: "Combinational circuits ka main feature?", options: ["Output depends only on current input","Depends on past input","Stores memory","Clock dependent"], answer: "Output depends only on current input", explanation: "Combinational = memoryless" },
{ category: "Combinational Circuits", question: "2-to-1 multiplexer ka Boolean expression?", options: ["Y = A'S + BS","Y = A+B","Y = AB","Y = A XOR B"], answer: "Y = A'S + BS", explanation: "Mux formula: Y = A'S + BS" },
{ category: "Combinational Circuits", question: "Full adder ka sum output expression?", options: ["A XOR B XOR Cin","A AND B","A OR B","A NAND B"], answer: "A XOR B XOR Cin", explanation: "Sum = A XOR B XOR Cin" },
{ category: "Combinational Circuits", question: "Half adder ka output kya hota hai?", options: ["Sum & Carry", "Only Sum", "Only Carry", "None"], answer: "Sum & Carry", explanation: "Half adder me sum aur carry dono output hote hain." },
{ category: "Combinational Circuits", question: "Multiplexer ka opposite circuit?", options: ["Demultiplexer","Encoder","Decoder","Adder"], answer: "Demultiplexer", explanation: "Demux distributes single input to multiple outputs" },
{ category: "Combinational Circuits", question: "Ripple carry adder ka main drawback?", options: ["Slow due to carry propagation","Consumes more power","No drawback","Memory storage"], answer: "Slow due to carry propagation", explanation: "Carry propagates through all stages causing delay" },
{ category: "Combinational Circuits", question: "4-to-1 multiplexer ka function?", options: ["Select one input out of four","Add numbers","Store data","Invert signal"], answer: "Select one input out of four", explanation: "Multiplexer selects single input based on select lines" },
{ category: "Combinational Circuits", question: "Full subtractor ka borrow output?", options: ["A'B + A'Bin + BBin","AB + BCin","A XOR B","A OR B"], answer: "A'B + A'Bin + BBin", explanation: "Borrow = A'B + A'Bin + BBin" },
{ category: "Combinational Circuits", question: "ALU ka main function?", options: ["Perform arithmetic & logic operations","Store data","Only add numbers","Only compare"], answer: "Perform arithmetic & logic operations", explanation: "ALU performs arithmetic and logic" },
{ category: "Combinational Circuits", question: "Full adder ka output kya hota hai?", options: ["Sum & Carry", "Only Sum", "Only Carry", "None"], answer: "Sum & Carry", explanation: "Full adder me 3 inputs aur 2 outputs hote hain (sum & carry)" },
{ category: "Combinational Circuits", question: "1-to-4 demultiplexer me kitne select lines hote hain?", options: ["2","1","4","3"], answer: "2", explanation: "2 select lines choose one of 4 outputs" },
{ category: "Combinational Circuits", question: "Combinational circuit ka example?", options: ["Adder, Subtractor, Mux, Demux","Flip-flop","Counter","Register"], answer: "Adder, Subtractor, Mux, Demux", explanation: "These circuits are memoryless combinational circuits" },
{ category: "Combinational Circuits", question: "2-to-4 decoder ka function?", options: ["Convert 2 inputs to 4 outputs","Add numbers","Select input","Store data"], answer: "Convert 2 inputs to 4 outputs", explanation: "Decoder = n inputs → 2^n outputs" },
{ category: "Combinational Circuits", question: "Comparator circuit me inputs kitne hote hain?", options: ["2 or more","1","3","4"], answer: "2 or more", explanation: "Binary numbers to compare" },
{ category: "Combinational Circuits", question: "ALU me control lines ka kaam?", options: ["Select operation","Store data","Add numbers","Compare numbers"], answer: "Select operation", explanation: "Control lines choose operation" },
{ category: "Combinational Circuits", question: "2-to-4 decoder ka truth table kitni rows ka hota hai?", options: ["4","2","8","6"], answer: "4", explanation: "2 inputs → 4 rows in truth table" },
{ category: "Combinational Circuits", question: "Sum of products (SOP) ka use?", options: ["Boolean simplification","Memory storage","Add numbers","Compare numbers"], answer: "Boolean simplification", explanation: "SOP used to implement logic directly" },
{ category: "Combinational Circuits", question: "Logic operations ALU me?", options: ["AND, OR, XOR, NOT","Add, Subtract","Multiply, Divide","Store only"], answer: "AND, OR, XOR, NOT", explanation: "ALU performs bitwise logic operations" },
{ category: "Combinational Circuits", question: "Multiplexer me select line ka function?", options: ["Choose input line","Output data","Store data","Invert signal"], answer: "Choose input line", explanation: "Select lines choose which input is sent to output" },
{ category: "Combinational Circuits", question: "Full subtractor me output kya hota hai?", options: ["Difference & Borrow","Sum & Carry","Only Difference","Only Borrow"], answer: "Difference & Borrow", explanation: "Full subtractor me difference aur borrow output hote hain" },
{ category: "Combinational Circuits", question: "K-map ka full form?", options: ["Karnaugh map","Key map","Keep map","None"], answer: "Karnaugh map", explanation: "K-map = graphical simplification method" },
{ category: "Combinational Circuits", question: "Comparator ka Greater output?", options: ["High if A>B","High if A<B","Always low","Always high"], answer: "High if A>B", explanation: "Output = 1 if A>B" },
{ category: "Combinational Circuits", question: "Half subtractor ka difference output?", options: ["A XOR B","A AND B","A OR B","A NAND B"], answer: "A XOR B", explanation: "Difference = A XOR B" },
{ category: "Combinational Circuits", question: "ALU me output?", options: ["Result & flags","Only result","Only flags","No output"], answer: "Result & flags", explanation: "ALU outputs result and status flags" },
{ category: "Combinational Circuits", question: "2-bit magnitude comparator ka function?", options: ["Compare A and B","Add numbers","Subtract numbers","Store data"], answer: "Compare A and B", explanation: "Comparator compares binary numbers" },
{ category: "Combinational Circuits", question: "Multiplexer me 4 inputs aur 2 select lines ka ratio?", options: ["2^n rule","1:1","1:2","None"], answer: "2^n rule", explanation: "2 select lines → 2^2 = 4 inputs" },
{ category: "Combinational Circuits", question: "Full subtractor ka borrow output?", options: ["A'B + A'Bin + BBin","AB + BCin","A XOR B","A OR B"], answer: "A'B + A'Bin + BBin", explanation: "Borrow = A'B + A'Bin + BBin" },
{ category: "Combinational Circuits", question: "Half adder ka sum output ka Boolean expression?", options: ["A XOR B","A AND B","A OR B","A NAND B"], answer: "A XOR B", explanation: "Sum = A XOR B" },
{ category: "Combinational Circuits", question: "Comparator ka Smaller output?", options: ["High if A<B","High if A>B","Always low","Always high"], answer: "High if A<B", explanation: "Output = 1 if A<B" },
{ category: "Combinational Circuits", question: "Logic minimization ka purpose?", options: ["Reduce gates","Store data","Add numbers","Compare numbers"], answer: "Reduce gates", explanation: "Minimization reduces hardware complexity" },
{ category: "Combinational Circuits", question: "Full adder ka sum output expression?", options: ["A XOR B XOR Cin","A AND B","A OR B","A NAND B"], answer: "A XOR B XOR Cin", explanation: "Sum = A XOR B XOR Cin" },
{ category: "Combinational Circuits", question: "1-bit ALU basic operations?", options: ["AND, OR, ADD, SUB","Multiplication only","Division only","Buffer only"], answer: "AND, OR, ADD, SUB", explanation: "Basic ALU operations" },
{ category: "Combinational Circuits", question: "Binary subtraction ke liye kaunsa circuit use hota hai?", options: ["Half subtractor", "Full subtractor", "Multiplier", "Encoder"], answer: "Half subtractor", explanation: "Half subtractor subtracts two bits" },
{ category: "Combinational Circuits", question: "Full subtractor ka difference output?", options: ["A XOR B XOR Bin","A AND B","A OR B","A NAND B"], answer: "A XOR B XOR Bin", explanation: "Difference = A XOR B XOR Bin" },
{ category: "Combinational Circuits", question: "Decoder ka main purpose?", options: ["Convert binary to unique output","Add numbers","Subtract numbers","Store data"], answer: "Convert binary to unique output", explanation: "Decoder activates single output based on binary input" },
{ category: "Combinational Circuits", question: "4-bit binary adder ko kya kehte hain?", options: ["Ripple Carry Adder","Half adder","Full subtractor","Multiplier"], answer: "Ripple Carry Adder", explanation: "4-bit adder = ripple carry adder" },
{ category: "Combinational Circuits", question: "Multiplexer ka opposite circuit?", options: ["Demultiplexer","Encoder","Decoder","Adder"], answer: "Demultiplexer", explanation: "Demux distributes single input to multiple outputs" },

  // Sequential Circuits
  { category: "Sequential Circuits", question: "Flip-Flop ka use kya hota hai?", options: ["Memory Storage", "Adder", "Multiplexer", "Decoder"], answer: "Memory Storage", explanation: "Flip-Flop sequential circuit hai jo memory store karta hai." },
  { category: "Sequential Circuits", question: "D Flip-Flop ka main application kya hai?", options: ["Shift register","Counter","Oscillator","Timer"], answer: "Shift register", explanation: "D Flip-Flop ka use shift registers me hota hai." },
  { category: "Sequential Circuits", question: "Synchronous counter ka main advantage?", options: ["No propagation delay","Simple design","Memoryless","Toggle only"], answer: "No propagation delay", explanation: "Sabhi flip-flops ek saath trigger hote hain → delay kam hota hai." },
  { category: "Sequential Circuits", question: "T Flip-Flop ka toggle condition kya hai?", options: ["T=1","T=0","T=Clock","T=Q"], answer: "T=1", explanation: "T=1 par flip-flop toggle karta hai." },
  { category: "Sequential Circuits", question: "Shift register ka main disadvantage kya hai?", options: ["Slower than parallel memory","No disadvantage","High power","Invalid state"], answer: "Slower than parallel memory", explanation: "Serial transfer me parallel memory se slow hota hai." },
  { category: "Sequential Circuits", question: "SR Flip-Flop ka reset state kya hai?", options: ["S=0, R=1", "S=1, R=0", "S=0, R=0", "S=1, R=1"], answer: "S=0, R=1", explanation: "S=0 aur R=1 se Q=0 reset hota hai." },
  { category: "Sequential Circuits", question: "Synchronous counter ka max count for 3-bit?", options: ["7","8","15","16"], answer: "7", explanation: "3-bit counter 0 se 7 tak count karta hai." },
  { category: "Sequential Circuits", question: "Asynchronous down counter ka counting sequence?", options: ["High to low","Low to high","Random","Depends on input"], answer: "High to low", explanation: "Down counter me counting high se low hoti hai." },
  { category: "Sequential Circuits", question: "JK Flip-Flop ka reset condition kya hai?", options: ["J=0, K=1", "J=1, K=0", "J=1, K=1", "J=0, K=0"], answer: "J=0, K=1", explanation: "J=0 aur K=1 se flip-flop reset hota hai." },
  { category: "Sequential Circuits", question: "T Flip-Flop characteristic table me toggle kab hota hai?", options: ["T=1","T=0","Depends on Q","Always"], answer: "T=1", explanation: "T=1 par Q flip karta hai." },
  { category: "Sequential Circuits", question: "Sequential circuit ka main challenge?", options: ["Timing hazards & glitches","Memoryless","Always OR gate","Always AND gate"], answer: "Timing hazards & glitches", explanation: "Timing issues sequential circuits me design challenge hote hain." },
  { category: "Sequential Circuits", question: "SR Flip-Flop ka characteristic table kya represent karta hai?", options: ["Next state for each input combination","Current state","Output only","Input only"], answer: "Next state for each input combination", explanation: "Characteristic table se pata chalta hai ki next state kya hoga given inputs par." },
  { category: "Sequential Circuits", question: "D Flip-Flop ka edge trigger kya hai?", options: ["Rising/Falling edge","Input change","Output change","Always"], answer: "Rising/Falling edge", explanation: "D Flip-Flop clock ke edge par trigger hota hai." },
  { category: "Sequential Circuits", question: "Shift register me Q aur Q' ka relation kya hai?", options: ["Q' = NOT Q","Q' = Q","Q' = Input","Q' = Output"], answer: "Q' = NOT Q", explanation: "Complementary outputs hamesha opposite hoti hain." },
  { category: "Sequential Circuits", question: "Asynchronous counter ka main feature kya hai?", options: ["Flip-flops clocked at different times","All flip-flops clocked simultaneously","Memoryless","Toggle only"], answer: "Flip-flops clocked at different times", explanation: "Asynchronous counter me flip-flops sequentially clock hote hain, ek dusre ke output se." },
  { category: "Sequential Circuits", question: "Sequential circuit ka main advantage?", options: ["Complex function realization with memory","Memoryless","Only combinational","Oscillator"], answer: "Complex function realization with memory", explanation: "Sequential circuits complex functions aur memory operations perform karte hain." },
  { category: "Sequential Circuits", question: "D Flip-Flop ka characteristic table kya dikhata hai?", options: ["Next state for each D input","Current state","Output only","Input only"], answer: "Next state for each D input", explanation: "Characteristic table dikhata hai ki D input se next state kya hogi." },
  { category: "Sequential Circuits", question: "JK Flip-Flop ka toggle condition kya hai?", options: ["J=1, K=1", "J=0, K=0", "J=1, K=0", "J=0, K=1"], answer: "J=1, K=1", explanation: "JK flip-flop toggle hota hai jab J=1 aur K=1 ho." },
  { category: "Sequential Circuits", question: "Finite State Machine (FSM) ka main application?", options: ["Control circuits","Oscillator","Memory","Adder"], answer: "Control circuits", explanation: "FSM digital control circuits me extensively use hoti hai." },
  { category: "Sequential Circuits", question: "SR Flip-Flop me Q aur Q' ka relation kya hai?", options: ["Q' = NOT Q","Q' = Q","Q' = S","Q' = R"], answer: "Q' = NOT Q", explanation: "Flip-flop me complementary outputs hamesha opposite hote hain." },
  { category: "Sequential Circuits", question: "Synchronous counter me flip-flop input kaise control hota hai?", options: ["Logic gating","Direct clock","Random","Depends on Q"], answer: "Logic gating", explanation: "Flip-flop input next state determine karne ke liye logic gates se control hota hai." },
  { category: "Sequential Circuits", question: "Sequential circuit ka main difference combinational se?", options: ["Memory presence","Memoryless","Always fast","No output"], answer: "Memory presence", explanation: "Sequential circuits memory use karte hain, combinational circuits nahi." },
  { category: "Sequential Circuits", question: "Mealy machine ka main disadvantage?", options: ["Output glitches","Stable output","No toggle","Memoryless"], answer: "Output glitches", explanation: "Mealy machine me input change ke dauran glitches aa sakte hain." },
  { category: "Sequential Circuits", question: "D Flip-Flop ka setup time kya hai?", options: ["Data stable before clock edge","Data stable after clock edge","Output stable","Input unstable"], answer: "Data stable before clock edge", explanation: "Setup time = Data ko clock se pehle stable rakhna hota hai." },
  { category: "Sequential Circuits", question: "SR Flip-Flop ka set state kya hai?", options: ["S=1, R=0", "S=0, R=1", "S=0, R=0", "S=1, R=1"], answer: "S=1, R=0", explanation: "S=1 aur R=0 se Q=1 set hota hai." },
  { category: "Sequential Circuits", question: "Shift registers ka main type?", options: ["SISO, SIPO, PISO, PIPO","JK, D, T, SR","Up & Down","Moore & Mealy"], answer: "SISO, SIPO, PISO, PIPO", explanation: "Shift registers ke 4 main types hote hain." },
  { category: "Sequential Circuits", question: "JK Flip-Flop ka characteristic equation kya hai?", options: ["Q_next = JQ' + K'Q", "Q_next = J'Q + KQ'", "Q_next = JQ + KQ'", "Q_next = J+K"], answer: "Q_next = JQ' + K'Q", explanation: "Characteristic equation: Q_next = JQ' + K'Q" },
  { category: "Sequential Circuits", question: "Clocked JK Flip-Flop me state change kab hoti hai?", options: ["Clock pulse par","Input par","Output par","Hamesha"], answer: "Clock pulse par", explanation: "State sirf clock pulse ke rising/falling edge par change hoti hai." },
  { category: "Sequential Circuits", question: "D Flip-Flop ka main function kya hai?", options: ["Data storage","Toggle","Reset","Set"], answer: "Data storage", explanation: "D Flip-Flop ek latch jisme input data clock par store hota hai." },
  { category: "Sequential Circuits", question: "T Flip-Flop ka main advantage kya hai?", options: ["Simple design for toggle","No toggle","Invalid state","Memoryless"], answer: "Simple design for toggle", explanation: "T Flip-Flop easily toggle karta hai." },
  { category: "Sequential Circuits", question: "Shift register ka main application?", options: ["Data storage & transfer","Counting","Oscillator","Memory"], answer: "Data storage & transfer", explanation: "Shift registers ka use mainly data storage aur transfer me hota hai." },
  { category: "Sequential Circuits", question: "Edge-triggered flip-flops ka main advantage?", options: ["Avoid race conditions","Memoryless","No toggle","Oscillator"], answer: "Avoid race conditions", explanation: "Edge-triggered flip-flops race condition avoid karte hain." },
  { category: "Sequential Circuits", question: "State diagram ka main purpose?", options: ["System behavior visualization","Add numbers","Subtract numbers","Store data"], answer: "System behavior visualization", explanation: "State diagram se machine ke state transitions dekhe ja sakte hain." },
  { category: "Sequential Circuits", question: "Moore machine ka advantage?", options: ["Stable output","Fast output change","No memory","Toggle"], answer: "Stable output", explanation: "Moore machine me output sirf state pe depend karta hai → stable output." },
  { category: "Sequential Circuits", question: "Asynchronous counter ko kaise mod-N counter banaya jata hai?", options: ["Reset on N","Toggle N times","Use JK flip-flop","Use D flip-flop"], answer: "Reset on N", explanation: "Mod-N counter me counter N par reset hota hai." },
  { category: "Sequential Circuits", question: "Sequential circuit me main elements?", options: ["Flip-flops, gates, clock","Adder, Subtractor","Memory only","Oscillator only"], answer: "Flip-flops, gates, clock", explanation: "Sequential circuit flip-flops, combinational gates aur clock se banta hai." },
  { category: "Sequential Circuits", question: "JK Flip-Flop ka type kya hai?", options: ["Bistable","Monostable","Astable","Toggel"], answer: "Bistable", explanation: "JK Flip-Flop bhi bistable hai, jisme do stable states hoti hain." },
  { category: "Sequential Circuits", question: "D Flip-Flop ka type kya hai?", options: ["Bistable","Monostable","Astable","Toggel"], answer: "Bistable", explanation: "D Flip-Flop bistable hota hai." },
  { category: "Sequential Circuits", question: "Synchronous counter ka main application?", options: ["Digital clocks","Oscillator","Memory","Adder"], answer: "Digital clocks", explanation: "Synchronous counters fast operation ke liye digital clocks me use hote hain." },
  { category: "Sequential Circuits", question: "SR Flip-Flop ka circuit kaunsa gate use karke banaya ja sakta hai?", options: ["NOR/NAND gates","AND gates","OR gates","XOR gates"], answer: "NOR/NAND gates", explanation: "SR Flip-Flop ko NOR ya NAND gates se implement kiya ja sakta hai." },
  { category: "Sequential Circuits", question: "Synchronous counter me timing diagram ka use?", options: ["State visualization","Add numbers","Subtract numbers","Store data"], answer: "State visualization", explanation: "Timing diagram se states aur clock sequence clearly dekhe ja sakte hain." },
  { category: "Sequential Circuits", question: "FSM ka full form?", options: ["Finite State Machine","Fast Switching Machine","Flip State Memory","Functional State Model"], answer: "Finite State Machine", explanation: "FSM = Finite State Machine" },
  { category: "Sequential Circuits", question: "T Flip-Flop ka edge trigger kab hota hai?", options: ["Rising/Falling edge","Input change","Output change","Always"], answer: "Rising/Falling edge", explanation: "T Flip-Flop edge-triggered hota hai." },
  { category: "Sequential Circuits", question: "Asynchronous up counter ka counting sequence?", options: ["Low to high","High to low","Random","Depends on input"], answer: "Low to high", explanation: "Up counter me counting low se high hoti hai." },
  { category: "Sequential Circuits", question: "D Flip-Flop me Q aur Q' ka relation?", options: ["Q' = NOT Q","Q' = Q","Q' = D","Q' = D'"], answer: "Q' = NOT Q", explanation: "Complementary outputs hamesha opposite hoti hain." },
  { category: "Sequential Circuits", question: "JK Flip-Flop me invalid state hota hai?", options: ["Nahi","Haan","Kabhi","Depends"], answer: "Nahi", explanation: "JK Flip-Flop me koi invalid state nahi hota, toggle se bachne ke liye design kiya gaya hai." },
  { category: "Sequential Circuits", question: "Shift register me clock ka function kya hai?", options: ["Synchronize data transfer","Add numbers","Compare","Store data"], answer: "Synchronize data transfer", explanation: "Clock data transfer ko synchronize karta hai." },
  { category: "Sequential Circuits", question: "T Flip-Flop ka type kya hai?", options: ["Bistable","Monostable","Astable","Toggle"], answer: "Bistable", explanation: "T Flip-Flop bhi bistable hai." },
  { category: "Sequential Circuits", question: "Mealy machine output depend karta hai?", options: ["Current state & input","Current state only","Input only","Previous state only"], answer: "Current state & input", explanation: "Mealy machine me output current state aur input dono pe depend karta hai." },
  { category: "Sequential Circuits", question: "Sequential circuit ka main feature?", options: ["Output depends on current & past inputs","Memoryless","Only combinational","Oscillator"], answer: "Output depends on current & past inputs", explanation: "Sequential circuits me output input history pe bhi depend karta hai." },
  { category: "Sequential Circuits", question: "Synchronous counter ka disadvantage?", options: ["More hardware","Ripple delay","Invalid state","Memoryless"], answer: "More hardware", explanation: "Synchronous counter me extra gates lagte hain → hardware zyada." },
  { category: "Sequential Circuits", question: "Flip-flop excitation table ka purpose?", options: ["Determine required inputs for next state","Add numbers","Subtract numbers","Store data"], answer: "Determine required inputs for next state", explanation: "Excitation table se pata chalta hai ki next state ke liye flip-flop inputs kya honge." },
  { category: "Sequential Circuits", question: "SR Flip-Flop ka type kaunsa hai?", options: ["Bistable","Monostable","Astable","Toggel"], answer: "Bistable", explanation: "SR flip-flop ek bistable multivibrator hai, jo 2 stable states me rah sakta hai." },
  { category: "Sequential Circuits", question: "Sequential circuit ka main application?", options: ["Counters, shift registers, FSMs","Adder","Subtractor","Oscillator"], answer: "Counters, shift registers, FSMs", explanation: "Sequential circuits main digital systems me use hote hain." },
  { category: "Sequential Circuits", question: "Setup time ka definition?", options: ["Data stable before clock edge","Data stable after clock edge","Output stable","Input unstable"], answer: "Data stable before clock edge", explanation: "Setup time = data clock edge se pehle stable hona chahiye." },
  { category: "Sequential Circuits", question: "Shift register me Q aur Q' ka relation kya hai?", options: ["Q' = NOT Q","Q' = Q","Q' = Input","Q' = Output"], answer: "Q' = NOT Q", explanation: "Complementary outputs hamesha opposite hote hain." },
  { category: "Sequential Circuits", question: "T Flip-Flop ka main function?", options: ["Toggle","Store data","Reset","Set"], answer: "Toggle", explanation: "T Flip-Flop ka main kaam toggle karna hai." },
  { category: "Sequential Circuits", question: "Moore machine output depend karta hai?", options: ["Current state only","Current state & input","Input only","Previous state"], answer: "Current state only", explanation: "Moore machine output sirf state pe depend karta hai." },
  


  // Memory Circuits
  { category: "Memory Circuits", question: "RAM ka full form kya hai?", options: ["Read Access Memory", "Random Access Memory", "Readily Available Memory", "Random Allocation Memory"], answer: "Random Access Memory", explanation: "RAM = Random Access Memory, volatile memory." },
  { category: "Memory Circuits", question: "EEPROM erase ka method?", options: ["Electrical signal","UV light","Clock pulse","Manual reset"], answer: "Electrical signal", explanation: "EEPROM me electrical signal se erase hota hai." },
  { category: "Memory Circuits", question: "Memory hierarchy me cache position?", options: ["CPU ke close, fast and small","Between RAM and HDD","At secondary storage","Registers"], answer: "CPU ke close, fast and small", explanation: "Cache CPU ke near aur fast hota hai, small size me." },
  { category: "Memory Circuits", question: "Memory ka main function kya hai?", options: ["Data store karna","Data add karna","Data subtract karna","Only logic operations"], answer: "Data store karna", explanation: "Memory circuits data ko temporarily ya permanently store karte hain." },
  { category: "Memory Circuits", question: "Volatile memory kya hoti hai?", options: ["Power off hone par data lose hota hai","Power off hone par data safe rehta hai","Store numbers only","Performs arithmetic"], answer: "Power off hone par data lose hota hai", explanation: "Volatile memory me power supply band hone par data delete ho jata hai." },
  { category: "Memory Circuits", question: "ROM ka main advantage?", options: ["Non-volatile aur stable","Volatile","Fast like RAM","Cache only"], answer: "Non-volatile aur stable", explanation: "ROM data permanently store karta hai, reliable hota hai." },
  { category: "Memory Circuits", question: "Memory refresh ka purpose?", options: ["Retain volatile memory data","Perform arithmetic","Logic only","Cache only"], answer: "Retain volatile memory data", explanation: "Volatile memory me refresh cycle data retain karne ke liye hota hai." },
  { category: "Memory Circuits", question: "Memory read-only vs read/write?", options: ["ROM = read-only, RAM = read/write","Both read/write","Both read-only","Depends"], answer: "ROM = read-only, RAM = read/write", explanation: "ROM data read-only hota hai, RAM read/write possible hota hai." },
  { category: "Memory Circuits", question: "Memory module ka function?", options: ["Physical unit of RAM","ROM only","Registers only","Cache only"], answer: "Physical unit of RAM", explanation: "Memory module RAM ka physical form hota hai, motherboard pe lagaya jata hai." },
  { category: "Memory Circuits", question: "Memory controller main kaam?", options: ["Manage memory access, timing","Perform arithmetic","Logic only","Registers only"], answer: "Manage memory access, timing", explanation: "Memory controller read/write operations aur timing manage karta hai." },
  { category: "Memory Circuits", question: "Flash memory main use?", options: ["USB drives, SSDs, Embedded","RAM","Registers","Cache only"], answer: "USB drives, SSDs, Embedded", explanation: "Flash memory USB drives, SSDs, embedded systems me use hota hai." },
  { category: "Memory Circuits", question: "Dual-port RAM ka feature?", options: ["Read/write simultaneously from two ports","Single port only","Volatile","Non-volatile"], answer: "Read/write simultaneously from two ports", explanation: "Dual-port RAM do ports se simultaneous access allow karta hai." },
  { category: "Memory Circuits", question: "Cache memory me hit & miss kya hai?", options: ["Hit = data in cache, Miss = data not in cache","Hit = write, Miss = read","Both same","Depends"], answer: "Hit = data in cache, Miss = data not in cache", explanation: "Cache hit = data cache me, miss = cache me nahi." },
  { category: "Memory Circuits", question: "Memory latency ka matlab?", options: ["Time between request & data availability","Word length","Bus width","Voltage"], answer: "Time between request & data availability", explanation: "Memory latency = request aur data available hone me time." },
  { category: "Memory Circuits", question: "Virtual memory ka concept?", options: ["Use disk as temporary RAM","Use extra cache","Registers","ROM only"], answer: "Use disk as temporary RAM", explanation: "Virtual memory secondary storage ko RAM ki tarah use karta hai." },
  { category: "Memory Circuits", question: "Memory refresh cycle DRAM me?", options: ["To retain data","To perform addition","To perform subtraction","Logic only"], answer: "To retain data", explanation: "DRAM capacitor me data store karne ke liye periodic refresh cycle required hoti hai." },
  { category: "Memory Circuits", question: "Memory mapping ka purpose?", options: ["Assign address space to memory devices","Store data","Perform arithmetic","Cache only"], answer: "Assign address space to memory devices", explanation: "Memory mapping address space allocate karta hai memory devices ke liye." },
  { category: "Memory Circuits", question: "RAM ka main advantage?", options: ["Fast access","Non-volatile","Permanent storage","Cheap"], answer: "Fast access", explanation: "RAM fast read/write provide karta hai." },
  { category: "Memory Circuits", question: "EEPROM ka full form?", options: ["Electrically Erasable PROM","Enhanced EPROM","Extended PROM","Electronic PROM"], answer: "Electrically Erasable PROM", explanation: "EEPROM ko electrical signal se erase aur reprogram kiya ja sakta hai." },
  { category: "Memory Circuits", question: "ROM ka main use?", options: ["Firmware storage","Temporary storage","CPU operations","Registers"], answer: "Firmware storage", explanation: "ROM me system firmware aur boot programs store hote hain." },
  { category: "Memory Circuits", question: "Memory ka main disadvantage?", options: ["Volatility","Slow","Large size","Cannot store binary"], answer: "Volatility", explanation: "RAM power off hone par data lose kar deta hai." },
  { category: "Memory Circuits", question: "RAM me main interface signal?", options: ["Address, data, control","Clock only","Voltage only","Bus width only"], answer: "Address, data, control", explanation: "Memory access ke liye address, data aur control lines required hote hain." },
  { category: "Memory Circuits", question: "Cache memory kisliye use hoti hai?", options: ["CPU ke liye fast data access","Store files","Permanent storage","Perform arithmetic"], answer: "CPU ke liye fast data access", explanation: "Cache memory CPU ke liye frequently used data fast provide karti hai." },
  { category: "Memory Circuits", question: "Memory controller ka role?", options: ["Manage read/write operations","Perform addition","Perform subtraction","Logic operation"], answer: "Manage read/write operations", explanation: "Memory controller CPU aur memory ke beech communication manage karta hai." },
  { category: "Memory Circuits", question: "Memory hierarchy ka main purpose?", options: ["Speed aur cost optimize karna","Data add karna","Subtract karna","Perform logic"], answer: "Speed aur cost optimize karna", explanation: "Memory hierarchy me fast & expensive se leke slow & cheap memory use hoti hai." },
  { category: "Memory Circuits", question: "Memory access pattern sequential vs random?", options: ["Sequential consecutive, random any location","Sequential any location, random consecutive","Both same","Depends"], answer: "Sequential consecutive, random any location", explanation: "Sequential = consecutive locations, random = any location" },
  { category: "Memory Circuits", question: "ROM ka full form?", options: ["Read Only Memory","Random Operation Memory","Register Output Memory","Rapid Access Memory"], answer: "Read Only Memory", explanation: "ROM = Read Only Memory" },
  { category: "Memory Circuits", question: "Memory address space define kya karta hai?", options: ["Maximum addressable memory","Word length","Registers","Cache only"], answer: "Maximum addressable memory", explanation: "Address space define karta hai maximum memory jo CPU access kar sakta hai." },
  { category: "Memory Circuits", question: "PROM ka full form?", options: ["Programmable Read Only Memory","Primary ROM","Permanent ROM","Parallel ROM"], answer: "Programmable Read Only Memory", explanation: "PROM ek type ROM hai jo user ke dwara program kiya ja sakta hai." },
  { category: "Memory Circuits", question: "Memory throughput ka matlab?", options: ["Amount of data transferred per second","Access time","Word length","Bus width"], answer: "Amount of data transferred per second", explanation: "Throughput = memory se per second kitna data transfer hota hai." },
  { category: "Memory Circuits", question: "SRAM ka main use?", options: ["Cache memory","Hard disk","ROM","Registers"], answer: "Cache memory", explanation: "SRAM CPU cache me fast access ke liye use hota hai." },
  { category: "Memory Circuits", question: "Dynamic RAM ka feature?", options: ["Needs periodic refresh","Stable without refresh","Non-volatile","Random logic"], answer: "Needs periodic refresh", explanation: "DRAM capacitor charge lose karta hai, isliye refresh required hota hai." },
  { category: "Memory Circuits", question: "Word length ka matlab?", options: ["Ek row me bits ki sankhya","Memory size","Address lines","Bus width"], answer: "Ek row me bits ki sankhya", explanation: "Word length = ek memory word me bits ki sankhya" },
  { category: "Memory Circuits", question: "Memory read operation me kya hota hai?", options: ["Data memory se CPU me transfer hota hai","CPU data write karta hai","Data delete hota hai","Perform arithmetic"], answer: "Data memory se CPU me transfer hota hai", explanation: "Read operation = data memory se CPU me transfer" },
  { category: "Memory Circuits", question: "Memory write operation me kya hota hai?", options: ["CPU data memory me store karta hai","Data CPU se delete hota hai","Only logic operation","Compare data"], answer: "CPU data memory me store karta hai", explanation: "Write operation = CPU data ko memory me store karta hai." },
  { category: "Memory Circuits", question: "RAM volatile ya non-volatile?", options: ["Volatile","Non-volatile","Both","Depends"], answer: "Volatile", explanation: "RAM power off hone par data lose hota hai" },
  { category: "Memory Circuits", question: "Bit ka full form?", options: ["Binary digit","Binary integer","Basic integer","Byte index"], answer: "Binary digit", explanation: "Bit = Binary digit, memory ka basic unit" },
  { category: "Memory Circuits", question: "Byte me kitne bits hote hain?", options: ["8","4","16","2"], answer: "8", explanation: "1 byte = 8 bits" },
  { category: "Memory Circuits", question: "Memory address ka kya role hai?", options: ["Unique location identify karna","Data add karna","Data subtract karna","Perform logic"], answer: "Unique location identify karna", explanation: "Address har memory word ka unique location define karta hai." },
  { category: "Memory Circuits", question: "Memory cell ka main component?", options: ["Flip-flop or transistor-capacitor","Adder","Multiplexer","Decoder"], answer: "Flip-flop or transistor-capacitor", explanation: "Memory cell 1 bit store karne ke liye flip-flop ya capacitor use karta hai." },
  { category: "Memory Circuits", question: "Secondary memory ka example?", options: ["Hard disk, SSD","RAM","Registers","Cache"], answer: "Hard disk, SSD", explanation: "Secondary memory non-volatile hoti hai, jaise HDD, SSD." },
  { category: "Memory Circuits", question: "Primary memory me kaunse types hote hain?", options: ["RAM & ROM","Cache & Registers","Hard Disk","Flash only"], answer: "RAM & ROM", explanation: "Primary memory = RAM + ROM" },


  // Add more questions to reach 50+ following same structure
];

let score = 0;
let wrongCount = 0;
let currentQuestion;
let timer;
let timeLeft = 30;

const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const explanationDiv = document.getElementById("explanation");
const nextBtn = document.getElementById("next");
const scoreDiv = document.getElementById("score");
const wrongDiv = document.getElementById("wrong");
const timerDiv = document.getElementById("timer");

const categoryBtns = document.querySelectorAll(".category-btn");
const randomBtn = document.getElementById("random-btn");

// Fullscreen function
function openFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

// Category Button Logic
categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    openFullscreen(); // Fullscreen on category click
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;
    startQuiz(category);
  });
});

// Random Question Button Logic
randomBtn.addEventListener("click", () => {
  openFullscreen(); // Fullscreen on random click
  categoryBtns.forEach(b => b.classList.remove("active"));
  const randomIndex = Math.floor(Math.random() * questionsDB.length);
  const q = questionsDB[randomIndex];
  showQuestion(q);
});

// Start Quiz by Category
function startQuiz(category) {
  score = 0;
  wrongCount = 0;
  scoreDiv.textContent = `Score: ${score}`;
  wrongDiv.textContent = `Wrong: ${wrongCount}`;
  currentQuestion = getRandomQuestion(category);
  showQuestion(currentQuestion);
}

// Get Random Question by Category
function getRandomQuestion(category) {
  const filtered = questionsDB.filter(q => q.category === category);
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

// Disable option buttons
function disableOptions() {
  const btns = optionsDiv.querySelectorAll("button");
  btns.forEach(b => {
    b.disabled = true;
    b.onclick = null;
    b.classList.add("opacity-50", "cursor-not-allowed");
  });
}

// Show Question & Options
function showQuestion(q) {
  clearInterval(timer);
  timeLeft = 30;
  timerDiv.textContent = `Time: ${timeLeft}s`;

  questionDiv.textContent = q.question;
  optionsDiv.innerHTML = "";
  explanationDiv.textContent = "";
  nextBtn.style.display = "none";

  q.options.forEach(opt => {
    const button = document.createElement("button");
    button.textContent = opt;
    button.className = "w-full py-3 px-4 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] text-gray-700 font-medium hover:bg-blue-100 transition";
    button.onclick = () => checkAnswer(opt, q);
    optionsDiv.appendChild(button);
  });

  timer = setInterval(() => {
    timeLeft--;
    timerDiv.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      disableOptions();
      wrongCount += 1;
      wrongDiv.textContent = `Wrong: ${wrongCount}`;
      highlightCorrect(q);
      explanationDiv.textContent = `Time up! Correct Answer: ${q.answer}\nExplanation: ${q.explanation}`;
      nextBtn.style.display = "block";
    }
  }, 1000);
}

// Highlight correct & selected options
function highlightCorrect(q, selected = null) {
  const optionButtons = document.querySelectorAll("#options button");
  optionButtons.forEach(btn => {
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

// Check Answer & Show Explanation
function checkAnswer(selected, q) {
  clearInterval(timer);
  disableOptions();
  highlightCorrect(q, selected);

  if (selected === q.answer) {
    score += 1;
    explanationDiv.textContent = `Correct! ✅\nExplanation: ${q.explanation}`;
  } else {
    wrongCount += 1;
    explanationDiv.textContent = `Wrong! ❌\nCorrect Answer: ${q.answer}\nExplanation: ${q.explanation}`;
  }

  scoreDiv.textContent = `Score: ${score}`;
  wrongDiv.textContent = `Wrong: ${wrongCount}`;
  nextBtn.style.display = "block";
}

// Next Button Logic
nextBtn.addEventListener("click", () => {
  const category = document.querySelector(".category-btn.active")?.dataset.category || questionsDB[0].category;
  currentQuestion = getRandomQuestion(category);
  showQuestion(currentQuestion);
});

