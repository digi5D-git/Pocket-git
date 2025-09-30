---
tags: 
references:
index:
note: Barcode
generated: 4Q24 - Nov 14th || 319
last modified: 1Q25 - Feb 14th || 045
---

# Barcode

**What is a Barcode?**

> Barcodes are standardized lines of *vertical bars*, whose *width* can modify their interpretation.
> 
> > The **black lines** on a **white** background represent logical `0`s or `1`s.

A **barcode** is usually made up of a code signaling the *beginning*, then the *data*, then a *checksum* to verify the integrity of the data read, & finally a code signaling the *end* of the **barcode**.

## How to Decrypt

The process of decoding/reading a **barcode** is easiest with a dedicated handheld reader,[^1] or a smartphone with apps like *Google Goggles* & *Barcode Scanner*, or most smartphones standard *camera* apps have barcode reading capabilities. 

> [!tip] How to determine country of product with a barcode  
> Products with an **EAN-13** code (13 digits) use the first 3 digits to code the country associated with the manufacturer. While this is not necessarily the country of production it does establish the origin country of the main manufacturer.
> 
> > - `000` --> `019`, `030` --> `039`, `060` --> `139` are for the **United States**
> > - `500` --> `509` are for the **United Kingdom**
> > - `690` --> `699` are **China**
> > - `489` is specifically for **Hong Kong**

## Types of Barcode Encoding

Overall, the encoding & reading operations for **barcodes** is a coding of *black* & *white* elements in **binary** codes accompanied by a correspondence table.

> > Frequently used types of **barcodes** are *linear*, *two dimensional*, & *three dimensional*

**Common Formats Utilized:**

- QR-Code
- Barcode 128
- Barcode 39
- Barcode 93
- EAN / International Article Number[^2] 

---

### QR-Code

A QR-Code, or **Quick Response Code**, is a kind of two-dimensional barcode that can store various types of information.  
This information can include *text*, *URL links*, etc…

> [!faq]+ Origin  
> The QR-Code was invented in **1994** by a Japanese company by the name of **Denso Wave**

> A **QR-Code** is made up of black & white squares arranged in a square pattern.

![qr-code](3-Image/qr-code.png)

**The ISO/IEC[^3] 18004:2024**[^4] standard:  
This documentation specifies requirements for the symbology known as *QR-Code*. IT specifies the code symbology characteristics, data character encoding methods, symbol formats, dimensional characteristics, error correction rules, reference decoding algorithm, production quality requirements, & user-selectable application parameters.

For more in-depth information on the standards, reference the previous [ISO IEC 18004 2015 Standard](2-Knowledge/Ciphers%20Compendium/--cipher.bin/ISO%20IEC%2018004%202015%20Standard.pdf)

> [!important] QR-Code & Barcode Differences  
> A **barcode** is a linear data encoding consisting of parallel bars next to each other, with the data encoded according to the width of the black & white bars
> 
> > This method results in quite a limited amount of storage capacity
> 
> A **QR-Code** is a 2D arrangement of black & white squares in a square pattern for data encoding. This also incorporates *error-correcting* data, allowing them to be read even if they are damaged or partially obscured.
> 
> > This method provides a vastly greater storage capacity.

> Storage capacity of a QR-Code, while greater than linear barcodes, depends on its *version* & the level of *error correction*, but generally can store up to a **few thousand characters**

>  **example:**
> 
> > In ver. 40, **177x177** squares, it is possible to store up to **7089** digits or **4296** alphanumeric characters.

#### QR-Code Reading, Analyzing, & Editing

Recommended online utility for QR-Codes is **QRazyBox**

```cardlink
url: https://merri.cx/qrazybox/
title: "QRazyBox - QR Code Analysis and Recovery Toolkit"
host: merri.cx
favicon: img/icon.png
```

### Barcode 128

A type of barcoding used to encode alphanumeric data in a representation of black & white stripes, **Barcode 128** follows the *EAN-128* international coding standard which describes how to encode the **128** ASCII characters. This standard describes three coding tables:  
NaN. code 128A  
NaN. code 128B  
NaN. code 128C

> Barcode 128 is capable of storing a large number of characters & is widely used in industry, logistics, & inventory management

#### Encrypting with Barcode 128

Like other linear barcodes, encoding with **barcode 128** includes alternate black & white lines of variable width.[^5] The code consists of the **Start** segment and is closed with the **End** segment between these are the characters to encrypt, each represented by 6 bars (3 blacks & 3 whites).

> [!example] Barcode 128 encoding of DCODE  
> *DCODE* is written with 128B barcode as; `Start, D, C, O, D, E, End` OR as
> 
> > `211214, 112313, 131321, 133121, 112313, 132113, 2331112`
> 
> On this basis we now know that for the 128B Table
>  - `211214` = `Start`
>  - `2331112` = `End`

#### Differences between 128A, 128B, & 128C Codes

- Coding table **128A** has ASCII characters from **00 - 95**
- Coding table **128B** has ASCII characters from **32 - 127**
- Coding table **128C** has all numeric values from **00-99**

### Barcode 39

Barcode 39 uses an **encoding table** with **43** characters: **26** capital letters, **10** digits, & **7** special characters.

A **Barcode 39** starts with ***** & ends with *****     

### Barcode 93

### Three Dimensional Barcoding

Most frequently barcodes are found in a 2 dimensional representation, but the use of **3D** barcodes is also available today. 

3D barcodes utilize the same principals as linear & 2D barcodes. Basically, an image of some sort applied to a product & then read by a device to *log*, *categorize*, *inventory*, or *track* an individual product. Seeking a more **permanent solution** to the use of labels or stickers manufacturers began utilizing 3D barcodes *engraved* or *applied* to the product/asset itself during the manufacturing process.  
Unlike **linear** barcodes 3D bars are **NOT** read by variances in reflected light but by determining the height of each line. Using the *time* it takes the laser to bounce back & be recorded to determine the height as a *function* of **distance & time** and the **character** represented by the code can be interpreted.

A **direct part mark (DPM)** barcode reader captures the reflected image after passing a laser over it, the same laser tech used in home digital or office scanners for documents or images. After the data is recorded and digitized, then a digital processing unit is employed to interpret the image. 

> [!learn] 
> 
> > Since the 3D barcoding system operates on **height variances**  
> > any nuances or unwanted additions of color or paint to the barcode  
> > will have no effect on the end result

3D barcodes are embossed on the item & the scanner recognizes new characters in the string by the lower regions of the code (working the same way as the white lines or spaces do in linear barcodes). The *gap* allows the system to record a new height of a line & thus a new number or alpha character. 

> 3D barcodes make it nearly impossible to alter or obstruct the barcode's information, resulting in fewer inventory mistakes. Lowering operating costs of a manufacturing process completely.

[^1]: One example being the **NADAMOO** wireless barcode scanner with a 328 foot transmission distance
[^2]: EAN (European Article Number) or International Article Number refers to a standard barcode symbology & numbering system used in global trade to ID specific retail product type, in a specific packaging configuration, from a specific manufacturer. The standard has been subsumed in the *Global Trade Item Number* standard from the **GS1** organization. Numbers can also be referred to as **GTINs**.
[^3]: ISO: International Organization for Standardization & IEC: International Electrotechnical Commission
[^4]: Information Technology - Automatic identification and data capture techniques - QR code bar code symbology specification documentation. Previous specification documentation was the ISO/IEC 18004:2015 before being superseded by ISO/IEC 18004:2024 published *14 August 2024*.
[^5]: Widths vary between 1 & 4