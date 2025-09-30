---
tags: 
references:
index:
note: ASCII Standard
generated: 4Q24 - Nov 14th || 319
last modified: 1Q25 - Feb 14th || 045
---

# ASCII Standard

The **American Standard Code for Information Interchange**, or ASCII, encoding standard is a system that assigns a unique numerical code to each character (letters, numbers, symbols) on a computer. This was to facilitate the exchange of data between different computer systems.

> [!learn] Origin  
> The ASCII standard was defined in **1975** & is one of the Institute of Electrical & Electronics Engineers, **IEEE**, milestones. ASCII was developed under the guidance of a committee of the **American Standards Association** (ASA),[^1] called the **X3** committee.
> 
> > Developed in part from telegraph code, ASCIIs first commerical use was in the **Teletype Model 33** and the **Teletype Model 35** as a seven-bit teleprinter code promoted by Bell data services

![USASCII_code_chart](3-Image/USASCII_code_chart.png)[^2]

> [!warning]  
> Today the ASCII standard is outdated & has been supplanted by **Unicode**, which is also backward compatible with ASCII

## What is ASCII

The ASCII standard contains **128** 7-bit codes including **95** printable characters[^3]

### Encoding with ASCII

Encoding/Encryption with ASCII consists of replacing/translating each character with its value in the **ASCII Table**. Values can be written in several formats, depending on the needs, like *decimal*, *binary*, *hexadecimal*, or even *octal*.[^4] 

> [!example] `dcode` string in **ASCII**  
> To convert the string `dcode` in *binary* 7-bit ASCII
> 
> > `1100100` `1000011` `1101111` `1100100` `1100101` 
> 
> in *decimal*
> 
> > `100` `67` `111` `100` `101`

> [!warning] Limitations of standard ASCII

> In the original tables for ASCII any characters that did not exist in the table (special characters, accents, etc…) would not be able to be coded.

### Recognizing ASCII

An ASCII message is generally written either in **binary**, **decimal**, **hexadecimal**, or at times (though rarely) in **octal**.  
Some other recognizable human references would be the use of any references to *skiing*, or *sky*, while in computer languages it can be found typically when functions such as **fromCharCode()**, **CharCode()**, or **Chr()** .

Values in decimal found are between **0** --> **127**, with the most commonly used corresponding to usual characters, like upper & lower case letters, are between **65** --> **122** (in *decimal*)

> [!example] example ASCII formats and text translations
> - `65` `77` `69` `82` `73` `67` `65` `78` **decimal** = AMERICAN
> - `83` `116` `97` `110` `100` `97` `114` `100` **decimal** = Standard 
> - `1000011` `1001111` `1000100` `1000101` **7-bit Binary** = CODE
> - `01100011` `01101111` `01100100` `01100101` **8-bit Binary** = code
> - `49` `4E` `46` `4F` `52` `4D` `41` `54` `49` `4F` `4E` **Hexadecimal** = INFORMATION
> - `111` `116` `124` `105` `122` `103` `110` `101` `116` `107` `105` **Octal** = INTERCHANGE

#### ASCII Formats & Writing

The **ASCII Table** assigns a unique numeric code to each character, but this code can be written in multiple ways depending on the needs.

- **BIN**
	- writing in *binary* base 2 (**0** --> **1111111**)
- **BIN /7**
	- division every **7** bits (**0000000** --> **1111111**)
- **BIN /8**
	- division every **8** bits (**00000000** --> **11111111**)
- **BIN /1-7**
	- adaptive splitting between **1** & **7** bits
- **BIN /1-8**
	- adaptive splitting between **1** & **8** bits
- **BIN /N**
	- adaptive slicing from **1** to **N** bits
- **OCT**
	- writing in *octal* base 8 (**0** --> **177**)
- **OCT /3**
	- division every **3** digits (**000** --> **177**)
- **OCT /1-3**
	- adaptive splitting of **1** to **3** octal digits
- **OCT /N**
	- adaptive slicing from **1** to **N** octal digits
- **DEC**
	- writing in *decimal* base **10** (**0** --> **127**)
- **DEC /2**
	- division every **2** digits
- **DEC /3**\
	- division every **3** digits (**000** --> **127**)
- **DEC /1-3**
	- adaptive division of **1** to **3** digits
- **DEC /N**
	- adaptive division from **1** to **N** digits
- **HEX**
	- writing in **base 16** hexadecimal (**0** --> **7F**)
- **HEX /2**
	- division every **2** characters (**00** --> **7F**)
- **HEX /N**
	- adaptive splitting from **1** o **N** hexadecimal digits

> [!attention]  
> sometimes the symbols `→0` or `←0` will be displayed
> 
> > this symbols designate that the initial or final `0` has been added to allow *decoding*

---

## 7-bit ASCII Table

| Decimal | Octal | HEX | Binary  | Character | Info                               |
| ------- | ----- | --- | ------- | --------- | ---------------------------------- |
| 000     | 000   | 00  | 0000000 | `NUL`     | Null Character                     |
| 001     | 001   | 01  | 0000001 | `SOH`     | Start of Header                    |
| 002     | 002   | 02  | 0000010 | `STX`     | Start of Text                      |
| 003     | 003   | 03  | 0000011 | `ETX`     | End of Text                        |
| 004     | 004   | 04  | 0000100 | `EOT`     | End  of Transmission               |
| 005     | 005   | 05  | 0000101 | `ENQ`     | Enquiry                            |
| 006     | 006   | 06  | 0000110 | `ACK`     | Acknowledgement                    |
| 007     | 007   | 07  | 0000111 | `BEL`     | Bell                               |
| 008     | 010   | 08  | 0001000 | `BS`      | Backspace                          |
| 009     | 011   | 09  | 0001001 | `HT`      | Horizontal Tab                     |
| 010     | 012   | 0A  | 0001010 | `LF`      | Line Feed                          |
| 011     | 013   | 0B  | 0001011 | `VT`      | Vertical Tab                       |
| 012     | 014   | 0C  | 0001100 | `FF`      | Form Feed                          |
| 013     | 015   | 0D  | 0001101 | `CR`      | Carriage Return                    |
| 014     | 016   | 0E  | 0001110 | `SO`      | Shift Out                          |
| 015     | 017   | 0F  | 0001111 | `SI`      | Shift In                           |
| 016     | 020   | 10  | 0010000 | `DLE`     | Data Link Escape                   |
| 017     | 021   | 11  | 0010001 | `DC1`     | XON / Device Control 1             |
| 018     | 022   | 12  | 0010010 | `DC2`     | Device Control 2                   |
| 019     | 023   | 13  | 0010011 | `DC3`     | XOFF / Device Control 3            |
| 020     | 024   | 14  | 0010100 | `DC4`     | Device Control 4                   |
| 021     | 025   | 15  | 0010101 | `NAK`     | Negative Acknowledgement           |
| 022     | 026   | 16  | 0010110 | `SYN`     | Synchronous Idle                   |
| 023     | 027   | 17  | 0010111 | `ETB`     | End of Trans. Block                |
| 024     | 030   | 18  | 0011000 | `CAN`     | Cancel                             |
| 025     | 031   | 19  | 0011001 | `EM`      | End of Medium                      |
| 026     | 032   | 1A  | 0011010 | `SUB`     | Substitute                         |
| 027     | 033   | 1B  | 0011011 | `ESC`     | Escape                             |
| 028     | 034   | 1C  | 0011100 | `FS`      | File Separator                     |
| 029     | 035   | 1D  | 0011101 | `GS`      | Group Separator                    |
| 030     | 036   | 1E  | 0011110 | `RS`      | Request to Send / Record Separator |
| 031     | 037   | 1F  | 0011111 | `US`      | Unit Separator                     |
| 032     | 040   | 20  | 0100000 | `SP`      | Space                              |
| 033     | 041   | 21  | 0100001 | !         |                                    |
| 034     | 042   | 22  | 0100010 | "         |                                    |
| 035     | 043   | 23  | 0100011 | #         |                                    |
| 036     | 044   | 24  | 0100100 | $         |                                    |
| 037     | 045   | 25  | 0100101 | %         |                                    |
| 038     | 046   | 26  | 0100110 | &         |                                    |
| 039     | 047   | 27  | 0100111 | '         |                                    |
| 040     | 050   | 28  | 0101000 | (         |                                    |
| 041     | 051   | 29  | 0101001 | )         |                                    |
| 042     | 052   | 2A  | 0101010 | *         |                                    |
| 043     | 053   | 2B  | 0101011 | +         |                                    |
| 044     | 054   | 2C  | 0101100 | ,         |                                    |
| 045     | 055   | 2D  | 0101101 | -         |                                    |
| 046     | 056   | 2E  | 0101110 | .         |                                    |
| 047     | 057   | 2F  | 0101111 | /         |                                    |
| 048     | 060   | 30  | 0110000 | 0         |                                    |
| 049     | 061   | 31  | 0110001 | 1         |                                    |
| 050     | 062   | 32  | 0110010 | 2         |                                    |
| 051     | 063   | 33  | 0110011 | 3         |                                    |
| 052     | 064   | 34  | 0110100 | 4         |                                    |
| 053     | 065   | 35  | 0110101 | 5         |                                    |
| 054     | 066   | 36  | 0110110 | 6         |                                    |
| 055     | 067   | 37  | 0110111 | 7         |                                    |
| 056     | 070   | 38  | 0111000 | 8         |                                    |
| 057     | 071   | 39  | 0111001 | 9         |                                    |
| 058     | 072   | 3A  | 0111010 | :         |                                    |
| 059     | 073   | 3B  | 0111011 | ;         |                                    |
| 060     | 074   | 3C  | 0111100 | <         |                                    |
| 061     | 075   | 3D  | 0111101 | =         |                                    |
| 062     | 076   | 3E  | 0111110 | >         |                                    |
| 063     | 077   | 3F  | 0111111 | ?         |                                    |
| 064     | 100   | 40  | 1000000 | @         |                                    |
| 065     | 101   | 41  | 1000001 | A         |                                    |
| 066     | 102   | 42  | 1000010 | B         |                                    |
| 067     | 103   | 43  | 1000011 | C         |                                    |
| 068     | 104   | 44  | 1000100 | D         |                                    |
| 069     | 105   | 45  | 1000101 | E         |                                    |
| 070     | 106   | 46  | 1000110 | F         |                                    |
| 071     | 107   | 47  | 1000111 | G         |                                    |
| 072     | 110   | 48  | 1001000 | H         |                                    |
| 073     | 111   | 49  | 1001001 | I         |                                    |
| 074     | 112   | 4A  | 1001010 | J         |                                    |
| 075     | 113   | 4B  | 1001011 | K         |                                    |
| 076     | 114   | 4C  | 1001100 | L         |                                    |
| 077     | 115   | 4D  | 1001101 | M         |                                    |
| 078     | 116   | 4E  | 1001110 | N         |                                    |
| 079     | 117   | 4F  | 1001111 | O         |                                    |
| 080     | 120   | 50  | 1010000 | P         |                                    |
| 081     | 121   | 51  | 1010001 | Q         |                                    |
| 082     | 122   | 52  | 1010010 | R         |                                    |
| 083     | 123   | 53  | 1010011 | S         |                                    |
| 084     | 124   | 54  | 1010100 | T         |                                    |
| 085     | 125   | 55  | 1010101 | U         |                                    |
| 086     | 126   | 56  | 1010110 | V         |                                    |
| 087     | 127   | 57  | 1010111 | W         |                                    |
| 088     | 130   | 58  | 1011000 | X         |                                    |
| 089     | 131   | 59  | 1011001 | Y         |                                    |
| 090     | 132   | 5A  | 1011010 | Z         |                                    |
| 091     | 133   | 5B  | 1011011 | [         |                                    |
| 092     | 134   | 5C  | 1011100 | \         |                                    |
| 093     | 135   | 5D  | 1011101 | ]         |                                    |
| 094     | 136   | 5E  | 1011110 | ^         |                                    |
| 095     | 137   | 5F  | 1011111 | _         |                                    |
| 096     | 140   | 60  | 1100000 | `         |                                    |
| 097     | 141   | 61  | 1100001 | a         |                                    |
| 098     | 142   | 62  | 1100010 | b         |                                    |
| 099     | 143   | 63  | 1100011 | c         |                                    |
| 100     | 144   | 64  | 1100100 | d         |                                    |
| 101     | 145   | 65  | 1100101 | e         |                                    |
| 102     | 146   | 66  | 1100110 | f         |                                    |
| 103     | 147   | 67  | 1100111 | g         |                                    |
| 104     | 150   | 68  | 1101000 | h         |                                    |
| 105     | 151   | 69  | 1101001 | i         |                                    |
| 106     | 152   | 6A  | 1101010 | j         |                                    |
| 107     | 153   | 6B  | 1101011 | k         |                                    |
| 108     | 154   | 6C  | 1101100 | l         |                                    |
| 109     | 155   | 6D  | 1101101 | m         |                                    |
| 110     | 156   | 6E  | 1101110 | n         |                                    |
| 111     | 157   | 6F  | 1101111 | o         |                                    |
| 112     | 160   | 70  | 1110000 | p         |                                    |
| 113     | 161   | 71  | 1110001 | q         |                                    |
| 114     | 162   | 72  | 1110010 | r         |                                    |
| 115     | 163   | 73  | 1110011 | s         |                                    |
| 116     | 164   | 74  | 1110100 | t         |                                    |
| 117     | 165   | 75  | 1110101 | u         |                                    |
| 118     | 166   | 76  | 1110110 | v         |                                    |
| 119     | 167   | 77  | 1110111 | w         |                                    |
| 120     | 170   | 78  | 1111000 | x         |                                    |
| 121     | 171   | 79  | 1111001 | y         |                                    |
| 122     | 172   | 7A  | 1111010 | z         |                                    |
| 123     | 173   | 7B  | 1111011 | {         |                                    |
| 124     | 174   | 7C  | 1111100 | \|        |                                    |
| 125     | 175   | 7D  | 1111101 | }         |                                    |
| 126     | 176   | 7E  | 1111110 | ~         |                                    |
| 127     | 177   | 7F  | 1111111 | `DEL`     | Delete                             |

[^1]: The ASA would later become the United States of America Standards Institute (USASI) & then ultimately became the **American National Standards Institute** or **ANSI** 
[^2]: ASCII chart from **MIL-STD-188-100** of 1972
[^3]: The vast majority of the printable characters would allow writing in English, but not fully in other languages, there being no accent characters for one example
[^4]: system of mathematical writing of numbers in **base 8** using digits 0 --> 7