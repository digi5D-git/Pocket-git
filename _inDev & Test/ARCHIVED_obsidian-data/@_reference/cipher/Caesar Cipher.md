---
tags: 
references:
index:
note: Caesar Cipher
generated: 4Q24 - Nov 14th || 319
last modified: 1Q25 - Feb 14th || 045
---

# Caesar Cipher, A Shifting Encoding

**Online Tools for Caesar Cipher Encoding & Decoding:**

```cardlink
url: https://cryptii.com/pipes/caesar-cipher
title: "Caesar cipher: Encode and decode online"
description: "Method in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence."
host: cryptii.com
image: https://cdn.cryptii.com/assets/images/og-cryptii-default.png
```

[Caesar Cipher (Shift) - Online Decoder, Encoder, Solver, Translator (dcode.fr)](https://www.dcode.fr/caesar-cipher)

```cardlink
url: https://www.dcode.fr/caesar-cipher
title: "Caesar Cipher (Shift) - Online Decoder, Encoder, Solver, Translator"
description: "Tool to decrypt/encrypt with Caesar cipher (or Caesar code), a shift cipher, one of the most easy and most famous encryption systems, that uses the substitution of a letter by another one further in the alphabet."
host: www.dcode.fr
favicon: favicon.ico
image: https://www.dcode.fr/images/dcode.png
```

---

## [Caesar Cipher in Cryptography - GeeksforGeeks](https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/)

The **Caesar Cipher** is one of the simplest and oldest methods of encrypting messages, named after Julius Caesar, who reportedly used it to protect his military communications. This technique involves shifting the letters of the alphabet by a fixed number of places. For example, with a shift of three, the letter 'A' becomes 'D', 'B' becomes 'E', and so on. Despite its simplicity, the Caesar Cipher formed the groundwork for modern cryptographic techniques. In this article, we'll explore how the Caesar Cipher works, its significance, and its impact on the development of cryptography with its advantages and disadvantages.

What is Caesar Cipher Technique?
----------

The Caesar cipher is a simple encryption technique that was used by Julius Caesar to send secret messages to his allies. It works by shifting the letters in the plaintext message by a certain number of positions, known as the "shift" or "key". The Caesar Cipher technique is one of the earliest and simplest methods of encryption techniques.

It's simply a type of substitution cipher, i.e., each letter of a given text is replaced by a letter with a fixed number of positions down the alphabet. For example with a shift of 1, A would be replaced by B, B would become C, and so on. The method is apparently named after Julius Caesar, who apparently used it to communicate with his officials.

### Cryptography Algorithm For the Caesar Cipher

* Thus to cipher a given text we need an integer value, known as a shift which indicates the number of positions each letter of the text has been moved down.   
  The encryption can be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A = 0, B = 1,…, Z = 25. Encryption of a letter by a shift n can be described mathematically as. 

* For example, if the shift is 3, then the letter A would be replaced by the letter D, B would become E, C would become F, and so on. The alphabet is wrapped around so that after Z, it starts back at A.
* Here is an example of how to use the Caesar cipher to encrypt the message "HELLO" with a shift of 3:

NaN) Write down the plaintext message: HELLO  
NaN) Choose a shift value. In this case, we will use a shift of 3.  
NaN) Replace each letter in the plaintext message with the letter that is three positions to the right in the alphabet.

> [!example]  
H becomes K (shift 3 from H)   
 E becomes H (shift 3 from E)   
 L becomes O (shift 3 from L)   
 > L becomes O (shift 3 from L)   
 > O becomes R (shift 3 from O)

 4.The encrypted message is now "KHOOR".

> To decrypt the message, you simply need to shift each letter back by the same number of positions. In this case, you would shift each letter in "KHOOR" back by 3 positions to get the original message, "HELLO".

[Tex]E\_n(x)=(x+n)mod\\ 26 [/Tex]  
(Encryption Phase with shift n)

[Tex]D\_n(x)=(x-n)mod\\ 26 [/Tex]  
(Decryption Phase with shift n)

<img alt="Caesar Cipher Technique" src="https://media.geeksforgeeks.org/wp-content/uploads/ceaserCipher.png" height="inherit" width="inherit" />

**Examples**

**Text** : ABCDEFGHIJKLMNOPQRSTUVWXYZ  
**Shift**: 23  
**Cipher**: XYZABCDEFGHIJKLMNOPQRSTUVW  

**Text** : ATTACKATONCE  
**Shift**: 4  
**Cipher**: EXXEGOEXSRGI

#### Advantages

* Easy to implement and use thus, making suitable for beginners to learn about encryption.
* Can be physically implemented, such as with a set of rotating disks or a set of cards, known as a scytale, which can be useful in certain situations.
* Requires only a small set of pre-shared information.
* Can be modified easily to create a more secure variant, such as by using a multiple shift values or keywords.

#### Disadvantages

* It is not secure against modern decryption methods.
* Vulnerable to known-plaintext attacks, where an attacker has access to both the encrypted and unencrypted versions of the same messages.
* The small number of possible keys means that an attacker can easily try all possible keys until the correct one is found, making it vulnerable to a brute force attack.
* It is not suitable for long text [encryption](https://www.geeksforgeeks.org/what-is-data-encryption/) as it would be easy to crack.
* It is not suitable for secure communication as it is easily broken.
* Does not provide confidentiality, integrity, and authenticity in a message. 

### **Features Of Caesar Cipher**

NaN) ****Substitution cipher:**** The Caesar cipher is a type of [substitution cipher](https://www.geeksforgeeks.org/substitution-cipher/), where each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.  
NaN) ****Fixed key:**** The Caesar cipher uses a fixed key, which is the number of positions by which the letters are shifted. This key is known to both the sender and the receiver.  
NaN) ****Symmetric encryption:**** The Caesar cipher is a [symmetric encryption](https://www.geeksforgeeks.org/what-is-a-symmetric-encryption/) technique, meaning that the same key is used for both encryption and decryption.  
NaN) ****Limited keyspace:**** The Caesar cipher has a very limited keyspace of only 26 possible keys, as there are only 26 letters in the English alphabet.  
NaN) ****Vulnerable to brute force attacks:**** The Caesar cipher is vulnerable to [brute force attacks](https://www.geeksforgeeks.org/brute-force-attack/), as there are only 26 possible keys to try.  
NaN) ****Easy to implement:**** The Caesar cipher is very easy to implement and requires only simple arithmetic operations, making it a popular choice for simple encryption tasks.

## **Rules For the Caesar Cipher**

NaN) Choose a number between 1 and 25. This will be your "shift" value.  
NaN) Write down the letters of the alphabet in order, from A to Z.  
NaN) Shift each letter of the alphabet by the "shift" value. For example, if the shift value is 3, A would become D, B would become E, C would become F, and so on.  
NaN) Encrypt your message by replacing each letter with the corresponding shifted letter. For example, if the shift value is 3, the word "hello" would become "khoor".  
NaN) To decrypt the message, simply reverse the process by shifting each letter back by the same amount. For example, if the shift value is 3, the encrypted message "khoor" would become "hello".

---

## Algorithm For Caesar Cipher

**Input:**
---
NaN) Choose a shift value between 1 and 25.  
NaN) Write down the alphabet in order from A to Z.  
NaN) Create a new alphabet by shifting each letter of the original alphabet by the shift value. For example, if the shift value is 3, the new alphabet would be:  
NaN) A B C D E F G H I J K L M N O P Q R S T U V W X Y Z  
   D E F G H I J K L M N O P Q R S T U V W X Y Z A B C  
NaN) Replace each letter of the message with the corresponding letter from the new alphabet. For example, if the shift value is 3, the word "hello" would become "khoor".  
NaN) To decrypt the message, shift each letter back by the same amount. For example, if the shift value is 3, the encrypted message "khoor" would become "hello".

**Procedure:**
---
* Traverse the given text one character at a time .
* For each character, transform the given character as per the rule, depending on whether we're [encrypting or decrypting](https://www.geeksforgeeks.org/encrypt-and-decrypt-text-file-using-cpp/) the text.
* Return the new string generated.

> A program that receives a Text (string) and Shift value( integer) and returns the encrypted text. 

``` c++ A C++ program to illustrate Caesar Cipher Technique
 #include
<iostream>
 usingnamespacestd;
 // This function receives text and shift and// returns the encrypted textstringencrypt
 (stringtext,ints){stringresult="";
 // traverse textfor
 (inti=0;i<text.length();i++){
 // apply transformation to each character
 // Encrypt Uppercase 
 lettersif(isupper(text[i]))result+=char(int(text[i]+s-65)%26+65);
 // Encrypt Lowercase 
 letterselseresult+=char(int(text[i]+s-97)%26+97);
 }
 // Return the resulting 
 stringreturnresult;
 } 
 // Driver program to test the above 
 functionintmain() 
	{stringtext="ATTACKATONCE";ints=4;cout<<"Text : "<<text;cout<<"\nShift: <<s;cout<<"\nCipher: "<<encrypt(text,s);
 return0;
 }
```

``` java A Java Program to illustrate Caesar Cipher 
TechniqueclassCaesarCipher{
// Encrypts text using a shift of 
spublicstaticStringBufferencrypt(Stringtext,ints){StringBufferresult=newStringBuffer();
 for(inti=0;i<text.length();i++)
	{
	if(Character.isUpperCase(text.charAt(i)))
		{charch=(char)(((int)text.charAt(i)+s-65)%26+65);
			result.append(ch);}
		else{charch=(char)(((int)text.charAt(i)+s-97)%26+97);
			result.append(ch);}}returnresult;}
// Driver 
codepublicstaticvoidmain(String[]args)
{Stringtext="ATTACKATONCE";
ints=4;
 System.out.println("Text : "+text);
 System.out.println("Shift : "+s);
 System.out.println("Cipher: "+encrypt(text,s));
 }
 }
```

```python python program to illustrate Caesar Cipher 

Techniquedefencrypt(text,s):result=""
# traverse 
textforiinrange(len(text)):char=text[i]
# Encrypt uppercase 
charactersif(char.isupper()):result+=chr((ord(char)+s-65)%26+65)
# Encrypt lowercase 
characterselse:result+=chr((ord(char)+s-97)%26+97)returnresult
#check the above 
functiontext="ATTACKATONCE"s=4print("Text : "+text)print("Shift : "+str(s))print("Cipher: "+encrypt(text,s))
```

```c# A C# Program to illustrate Caesar Cipher 
TechniqueusingSystem;
usingSystem.Text;
publicclassCaesarCipher{
// Encrypts text using a shift on 
spublicstaticStringBuilderencrypt(Stringtext,ints){StringBuilderresult=newStringBuilder();
   for(inti=0;i<text.Length;i++){
	   if(char.IsUpper(text[i]))
		   {
		   charch=(char)(((int)text[i]+s-65)%26+65);
		   result.Append(ch);
		   }
		else{
			charch=(char)(((int)text[i]+s-97)%26+97);
			result.Append(ch);}
		}
		returnresult;
		}
// Driver 
codepublicstaticvoidMain(String[]args){
Stringtext="ATTACKATONCE";ints=4;Console.WriteLine("Text : "+text);
Console.WriteLine("Shift : "+s);Console.WriteLine("Cipher: "+encrypt(text,s));
}
}
/* This code contributed by PrinciRaj1992 */
```

```javascript
<script>//A Javascript Program to illustrate Caesar Cipher Technique
// Encrypts text using a shift on 
sfunctionencrypt(text,s)
{letresult=""for(leti=0;i<text.length;i++)
{letchar=text[i];
	if(char.toUpperCase(text[i])){
		letch=String.fromCharCode((char.charCodeAt(0)+s65)%26+65);
		result+=ch;
	}else{
		letch=String.fromCharCode((char.charCodeAt(0)+s97)%26+97);
		result+=ch;
		}
	}returnresult;
}
// Driver 
codelettext="ATTACKATONCE";
lets=4;document.write("Text : "+text+"<br>");
document.write("Shift : "+s+"<br>");
document.write("Cipher: "+encrypt(text,s)+"<br>");
// This code is contributed by avanitrachhadiya2155</script>
```

```php
<?php
// A PHP program to illustrate Caesar
// Cipher Technique
// This function receives text and shift 
// and returns the encrypted 
textfunctionencrypt($text,$s){$result="";
// traverse 
textfor($i=0;$i<strlen($text);$i++)
{
// apply transformation to each // character Encrypt Uppercase 
lettersif(ctype_upper($text[$i]))
$result=$result.chr((ord($text[$i])+$s-65)%26+65);
// Encrypt Lowercase
letterselse$result=$result.chr((ord($text[$i])+$s-97)%26+97);
}
// Return the resulting 
stringreturn$result;
}
// Driver 
Code$text="ATTACKATONCE";$s=4;echo"Text : ".$text;
echo"\nShift: ".$s;
echo"\nCipher: ".encrypt($text,$s);
// This code is contributed by ita_c
?>
```

**Output**

Text : ATTACKATONCE  
Shift: 4  
Cipher: EXXEGOEXSRGI

****Time complexity:****  
	O(N) where N is length of the given text  
****Auxiliary space:****  
	O(N)

****How to decrypt?****  
	We can either write another function decrypt similar to encrypt, that'll apply the given shift in the opposite direction to decrypt the original text. However we can use the cyclic property of the cipher under modulo, hence we can simply observe 

Cipher(n) = De-cipher(26-n)

Hence, we can use the same function to decrypt, instead, we'll modify the shift value such that shift = 26-shift (Refer to [this](http://ide.geeksforgeeks.org/UPgbid) for a sample run in C++).

#### Conclusion

The **Caesar Cipher**, with its straightforward approach of shifting letters, serves as an excellent introduction to the world of cryptography. While it is easy to understand and implement, its simplicity also makes it vulnerable to basic attacks. Despite these limitations, the Caesar Cipher's historical role is significant, it represents the early efforts to secure communication and has made the way for the more advanced encryption methods used today. Understanding the Caesar Cipher helps us appreciate the evolution of cryptographic techniques and the ongoing quest to protect information in our digital age.
