---
tags: 
references:
index:
note: Vigenère Cipher
generated: 4Q24 - Nov 14th || 319
last modified: 1Q25 - Feb 14th || 045
---

# [Vigenère Cipher - GeeksforGeeks](https://www.geeksforgeeks.org/vigenere-cipher/)

Vigenere Cipher is a method of encrypting alphabetic text. It uses a simple form of [polyalphabetic substitution](https://en.wikipedia.org/wiki/Polyalphabetic_cipher). A polyalphabetic cipher is any cipher based on substitution, using multiple substitution alphabets. The encryption of the original text is done using the [**Vigenère square or Vigenère table**](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher#/media/File:Vigen%C3%A8re_square_shading.svg).

* The table consists of the alphabets written out 26 times in different rows, each alphabet shifted cyclically to the left compared to the previous alphabet, corresponding to the 26 possible [Caesar Ciphers](https://www.geeksforgeeks.org/caesar-cipher/).
* At different points in the encryption process, the cipher uses a different alphabet from one of the rows.
* The alphabet used at each point depends on a repeating keyword.

**Example:**

```
Input : Plaintext :   GEEKSFORGEEKS             Keyword :  AYUSHOutput : Ciphertext :  GCYCZFMLYLEIMFor generating key, the given keyword is repeatedin a circular manner until it matches the length of the plain text.The keyword "AYUSH" generates the key "AYUSHAYUSHAYU"The plain text is then encrypted using the process explained below.
```

**Encryption:**

The first letter of the plaintext, G is paired with A, the first letter of the key. So use row G and column A of the Vigenère square, namely G. Similarly, for the second letter of the plaintext, the second letter of the key is used, the letter at row E, and column Y is C. The rest of the plaintext is enciphered in a similar fashion. 

**Table to encrypt – Geeks**

<img alt="Vigenère_square_shading" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Vigen%C3%A8re_square_shading.png" height="inherit" width="inherit" />

**Decryption:**  
Decryption is performed by going to the row in the table corresponding to the key, finding the position of the ciphertext letter in this row, and then using the column's label as the plaintext. For example, in row A (from AYUSH), the ciphertext G appears in column G, which is the first plaintext letter. Next, we go to row Y (from AYUSH), locate the ciphertext C which is found in column E, thus E is the second plaintext letter.

A more **easy implementation** could be to visualize Vigenère algebraically by converting [A-Z] into numbers [0–25]. 

```
EncryptionThe plaintext(P) and key(K) are added modulo 26.Ei = (Pi + Ki) mod 26DecryptionDi = (Ei - Ki) mod 26
```

**Note:** D<sub><span>i</span></sub> denotes the offset of the i-th character of the plaintext. Like offset of **A** is 0 and of **B** is 1 and so on.

Below is the implementation of the idea. 

C++`

```c++
// C++ code to implement Vigenere Cipher
#include<bits/stdc++.h>
using namespace std;

// This function generates the key in
// a cyclic manner until it's length isn't
// equal to the length of original text
string generateKey(string str, stringkey)
{
	int x = str.size();
	
	for (int i = 0;; i++) {
		if (x == i)
			i = 0;
		if (key.size() == str.size())
			break;
		key.push_back(key[i]);
	}
	return key;
}

// This function returns the encrypted text
// generated with the help of the key
string cipherText(string str, string key)
{
	string cipher_text;
	
	for (int i = 0; i < str.size(); i++) {
		// converting in range 0-25
		char x = (str[i] + key[i]) % 26;
		
		// convert into alphabets (ASCII)
		x += 'A';
		
		cipher_text.push_back(x);
	}
	return cipher_text;
}

// This function decrypts the encrypted text
// and returns the original text
string originalText(string cipher_text, string key)
{
	string orig_text;
	
	for (int i = 0; i < cipher_text.size(); i++) {
		// converting in range 0-25
		char x = (cipher_text[i] - key[i] + 26) % 26;
		
		// convert into alphabets(ASCII)
		x += 'A';
		orig_text.push_back(x);
	}
	return orig_text;
}

// Driver program to test the above function
int main()
{
	string str = "GEEKSFORGEEKS";
	string keyword = "AYUSH";
	if (any_of(str.begin(), str.end(), ::islower))
		transform(str.begin(), str.end(), str.begin(),
		 ::toupper);
	if (any_of(keyword.begin(), keyword.end(), ::islower))
		transform(keyword.begin(), keyword.end(), keyword.begin(),
		 ::toupper);
		
	string key = generateKey(str, keyword);
	string cipher_text = cipherText(str, key);
	
	cout << "Ciphertext : " << cipher_text << "\n";
	
	cout << "Original/Decrypted Text : " << originalText(cipher_text,key);
	return 0;
}
```

`Java`

```java
// Java code to implement Vigenere Cipher

class GFG
{

// This function generates the key in
// a cyclic manner until it's length isn't
// equal to the length of original text
static String generateKey(String str,String key)
{
	int x = str.length();
	
	for (int i = 0; ; i++)
	{
		if (x == i)
			i = 0;
		if (key.length() == str.length())
			break;
	 key+=(key.charAt(i));
	}
	return key;
}

// This function returns the encrypted text
// generated with the help of the key
static String cipherText(String str, String key)
{
	String cipher_text="";
	
	for (int i = 0; i < str.length(); i++)
	{
		// converting in range 0-25
		int x = (str.charAt(i) + key.charAt(i)) %26;
		
		// convert into alphabets(ASCII)
		x += 'A';
		
		cipher_text+=(char)(x);
	}
	return cipher_text;
}

// This function decrypts the encrypted text
// and returns the original text
static String originalText(String cipher_text, String key)
{
	String orig_text="";
	
	for (int i = 0; i < cipher_text.length() && i < key.length(); i++)
	{
		// converting in range 0-25
		int x = (cipher_text.charAt(i) - key.charAt(i)+ 26) %26;
		
		// convert into alphabets(ASCII)
		x += 'A';
		orig_text+=(char)(x);
	}
	return orig_text;
}

// This function will convert the lower case character to Upper case
static String LowerToUpper(String s)
{
	StringBuffer str = new StringBuffer(s);
	for(int i = 0; i < s.length(); i++)
	{
		if(Character.isLowerCase(s.charAt(i)))
		{
			str.setCharAt(i, Character.toUpperCase(s.charAt(i)));
		}
	}
	s = str.toString();
	return s;
}

// Driver code
public static void main(String[] args)
{
	String Str = "GEEKSFORGEEKS";
	String Keyword = "AYUSH";
	
	String str = LowerToUpper(Str);
	String keyword = LowerToUpper(Keyword);
	
	String key = generateKey(str, keyword);
	String cipher_text = cipherText(str, key);
	
	System.out.println("Ciphertext : " + cipher_text + "\n");
	
	System.out.println("Original/Decrypted Text : " + 
	originalText(cipher_text, key));
	}
}
// This code has been contributed by 29AjayKumar
```

`Python`

```python
def generate_key(msg, key):
	key = list(key)
	if len(msg) == len(key):
		return key
	else:
		for i in range(len(msg) - len(key)):
			key.append(key[i % len(key)])
	return"".join(key)

def encrypt_vigenere(msg, key):
	encrypted_text = []
	key = generate_key(msg,key)
	for i in range(len(msg)):
		char = msg[i]
		if char.isupper():
			encrypted_char = chr((ord(char) + 
			ord(key[i]) - 2 * ord('A')) % 26 + ord('A'))
		elif char.islower():
			encrypted_char = chr((ord(char) + 
			ord(key[i]) - 2 * ord('a')) % 26 + ord('a'))
		else:
			encrypted_char = char
		encrypted_text.append(encrypted_char)
	return"".join(encrypted_text)

def decrypt_vigenere(msg, key):
	decrypted_text = []
	key = generate_key(msg, key)
	for i in range(len(msg)):
		char = msg[i]
		if char.isupper():
			decrypted_char = chr((ord(char) - 
			ord(key[i]) + 26) % 26 + ord('A'))
		elif char.islower():
			decrypted_char = chr((ord(char) - 
			ord(key[i]) + 26) % 26 +ord('a'))
		else:
			decrypted_char = char
			decrypted_text.append(decrypted_char)
	return"".join(decrypted_text)
	
# Example usage
text_to_encrypt = "Hello, World!"
key = "KEY"

encrypted_text = encrypt_vigenere(text_to_encrypt, key)
print(f"Encrypted Text: {encrypted_text}")

decrypted_text = decrypt_vigenere(encrypted_text, key)
print(f"Decrypted Text: {decrypted_text}")
#previous code was only support the upper case letters#this code can be apply on both
```

`C#`

```c#
// C# code to implement Vigenere Cipher
using System;

class GFG
{

// This function generates the key in
// a cyclic manner until it's length isn't
// equal to the length of original text
static String generateKey(String str, String key)
{

	int x = str.Length;
	
	for (int i = 0; ; i++)
	{
		if (x == i)
			i = 0;
		if (key.Length == str.Length)
			break;
		key+=(key[i]);
	}
	return key;
}

// This function returns the encrypted text
// generated with the help of the key
static String cipherText(String str, String key)
{
	String cipher_text="";
	
	for(int i = 0; i < str.Length; i++)
	{
		// converting in range 0-25
		int x = (str[i] + key[i]) %26;
		
		// convert into alphabets(ASCII)
		x += 'A';
		
		cipher_text+=(char)(x);
	}
	return cipher_text;
}

// This function decrypts the encrypted text
// and returns the original text
static String originalText(String cipher_text, String key)
{
	String orig_text="";
	
	for (int i = 0; i < cipher_text.Length && i < key.Length; i++)
	{
		// converting in range 0-25
		int x = (cipher_text[i] - key[i] + 26) %26;
		
		// convert into alphabets(ASCII)
		x += 'A';
		orig_text+=(char)(x);
	}
	return orig_text;
}

// Driver code

public static void Main(String[] args) 
{
	String str = "GEEKSFORGEEKS";
	String keyword = "AYUSH";
	str = str.ToUpper();
	keyword = keyword.ToUpper();

	String key = generateKey(str, keyword);
	String cipher_text = cipherText(str, key);
	
	Console.WriteLine("Ciphertext : " + cipher_text + "\n");
	
	Console.WriteLine("Original/Decrypted Text : " 
	+ originalText(cipher_text, key));
	}
}
/* This code contributed by PrinciRaj1992 */
```

`Javascript`

```javascript
// JavaScript code to implement Vigenere Cipher
// This function generates the key in
// a cyclic manner until it's length isn't
// equal to the length of original text

function generateKey(str,key)
{


	key=key.split("");
	if(str.length==key.length)
		return key.join("");
	else 
	{
		 let temp=key.length;
		 for (let i=0;i<(str.length-temp) ; i++)
		{
			key.push(key[i%((key).length)])
		}
	}
	return key.join("");
}

// This function returns the encrypted text
// generated with the help of the key
 function cipherText(str,key)
 {
	 let cipher_text="";
	 
	 for (let i=0; i < str.length; i++)
	{
	 
		 // converting in range 0-25
		 let x = (str[i].charCodeAt(0)+ key[i].charCodeAt(0)) %26;
		 
		 // convert into alphabets(ASCII)
		 x += 'A'.charCodeAt(0);
		 
		 cipher_text+=String.fromCharCode(x);
	}
	return cipher_text;
}

 // This function decrypts the encrypted text
 // and returns the original text
 function originalText(cipher_text,key)
 {
	 let orig_text="";

	for (let i = 0; i < cipher_text.length; i++)
	{
		// converting in range 0-25
		let x = (cipher_text[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) %26;

		// convert into alphabets(ASCII)
		x += 'A'.charCodeAt(0);
		orig_text+=String.fromCharCode(x);
	}
	return orig_text;
}


 // This function will convert the lower
 // case character to Upper case
function LowerToUpper(s)
{
	let str=(s).split("");
	for(let i = 0; i < s.length; i++)
	{
		if(s[i] == s[i].toLowerCase())
		{
			str[i] = s[i].toUpperCase();
		}
	}
	s = str.toString();
	return s;
}

 // Driver code
let str = "GEEKSFORGEEKS";
let keyword = "AYUSH";

str = str.toUpperCase();
keyword = keyword.toUpperCase();

let key = generateKey(str, keyword);
 
let cipher_text = cipherText(str, key);
 
console.log("Ciphertext : " + cipher_text + "<br><br>");
console.log("Original/Decrypted Text : "+ originalText(cipher_text,key)+"<br>");
```

`

**Output**

```
Ciphertext : GCYCZFMLYLEIM
Original/Decrypted Text : GEEKSFORGEEKS
```

**Time Complexity : O(n)**, where n is the length of the string(here str).

**Space Complexity :O(n)**, here n is the length of the string(here str).
