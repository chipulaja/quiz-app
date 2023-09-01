# Quiz App #

## Deskripsi ##
Merupakan aplikasi sederhana yang kode-nya dibuat menggunakan bantuan AI

## Cara Menggunakan ##
Cara menggunakannya cukup simpel, buat soal kemudian letakkan di folder data dengan format seperti berikut :

1. file berupa json misal `soal1.json`
2. format yang digunakan
```json
   {
       "notes":"",
       "questions" : [
            {
                "question": "",
                "answer": "",
                "explanation": ""
            }
       ]
   }
```
3. sesuaikan kode `index.html` untuk mendaftarkan soal yang sudah di buat
```html
    <nav>
      <ul>
        <li><a href="#/question/soal1">Soal 1</a></li>
        <li><a href="#/question/soal2">Soal 2</a></li>
      </ul>
    </nav>
```

## Membuat Soal ##
kamu bisa membuat soal secara manual dengan cara di atas, atau dengan bantuan AI dengan prompt di bawah ini

**Prompt untuk membuat kalimat biasa :**
```prompt
buatkan saya file json dengan detail di bawah ini
- berisi 3 soal menerjemahkan bahasa indonesia ke bahasa Inggris
- fokus pada topik onepice
- bukan kalimat tanya
- melibatkan struktur kalimat aktif, pasif, pengkodisian tipe 1,2,3
- level soal adalah level Advanced
- notes di tulis dalam bahasa indonesia
- explanation di tulis dalam bahasa indonesia
- explanation berformat html dan tidak mengandung tag br
- di dalam explanation disebutkan nama tenses/grammar yang digunakan
- format explanation seperti dibawah

<p class='review-pertanyaan'>"Jika luffy menemukan One Piece. dia akan menjadi raja bajak laut."</p><p class='review-pejelasan-grammar'>kalimat di atas adalah <span class='review-nama-grammar'><strong> sebuah kalimat kondisional tipe 1</strong></span>.</p><p class='review-detail-pejelasan-grammar'>Kalimat ini menggambarkan sebuah situasi atau kondisi yang sangat mungkin terjadi di masa depan.</p><p><strong>Formula Umum:</strong></p><pre class="review-formula">If + subject + simple present tense verb, subject + will + base form of verb</pre><p>Maka bahasa inggrisnya adalah : </p><pre class="review-jawaban">If Luffy finds One Piece, he will become the Pirate King.</pre><p><strong>Berikut detail penyusun kalimatnya:</strong></p><ul class="review-daftar-pejelasan-jawaban"><li><em>"If"</em> adalah kata penghubung yang digunakan untuk memulai klausa kondisional.</li><li><em>"Luffy"</em> adalah subject atau subjek dari klausa kondisional.</li><li><em>"finds"</em> adalah simple present tense verb atau kata kerja dalam bentuk simple present.</li><li><em>"One Piece"</em> adalah object atau objek dari klausa kondisional.</li><li><em>"he"</em> adalah subject atau subjek dari klausa hasil (result clause).</li><li><em>"will"</em> adalah auxiliary verb atau kata kerja bantu.</li><li><em>"become"</em> adalah base form of verb atau bentuk dasar dari kata kerja.</li><li><em>"the Pirate King"</em> adalah object atau objek dari klausa hasil.</li></ul>

- format json seperti dibawah
    {
        "notes":"",
        "questions" : [
             {
                 "question": "",
                 "answer": "",
                 "explanation": ""
             }
        ]
    }
```

**Prompt untuk membuat kalimat tanya :**
```prompt
buatkan saya file json dengan detail di bawah ini
- berisi 3 soal menerjemahkan bahasa indonesia ke bahasa Inggris
- fokus pada topik onepice
- fokus pada 5W1H
- melibatkan struktur kalimat aktif, pasif, pengkodisian tipe 1,2,3
- notes di tulis dalam bahasa indonesia
- explanation di tulis dalam bahasa indonesia
- explanation berformat html dan tidak mengandung tag br
- format explanation seperti dibawah

<p class='review-pertanyaan kalimat-tanya'>"Apa yang akan dilakukan luffy jika dia menemukan one piece?"</p><p class='review-pejelasan-grammar'>Pertanyaan di atas berasal dari grammar <span class='review-nama-grammar'><strong>kalimat aktif conditional sentence tipe 1</strong></span><span class='review-penjelasan-pertanyaan-secara-spok'> dan menanyakan tindakan atau perilaku</span> luffy setelah menemukan one piece.</p><p class='review-detail-pejelasan-grammar'>Grammar tersebut menggambarkan sebuah situasi atau kondisi yang sangat mungkin terjadi di masa depan.</p><p><strong>Formula Umum:</strong></p><pre class='review-formula bukan-kalimat-tanya with-adverbial-phrase'>If + subject + simple present tense verb, subject + will + base form of verb</pre><p><strong>Contoh:</strong></p><pre class='review-contoh-kalimat bukan-kalimat-tanya'>If Luffy finds One Piece, he will become the Pirate King.</pre><p><strong>Formula umum pertanyaan :</strong></p><pre>Wh-word + auxiliary verb (will) + subject + base form of verb + if + subject + simple present tense verb + object?</pre><p>Berdasarkan informasi di atas kalimat pertanyaan bisa seperti berikut :</p><pre class='review-jawaban'>What will Luffy do if he finds One Piece?</pre><p><strong>Berikut Detail Penyusun kalimatnya:</strong></p><ul class='review-daftar-pejelasan-jawaban'><li><em>'What'</em> adalah Wh-word yang digunakan untuk menanyakan objek atau aksi.</li><li><em>'will'</em> adalah auxiliary verb atau kata kerja bantu.</li><li><em>'Luffy'</em> adalah subject atau subjek dari klausa pertama.</li><li><em>'do'</em> adalah base form of verb atau bentuk dasar dari kata kerja.</li><li><em>'if'</em> adalah kata penghubung yang digunakan untuk memulai klausa kondisional.</li><li><em>'he'</em> adalah subject atau subjek dari klausa kondisional.</li><li><em>'finds'</em> adalah simple present tense verb atau kata kerja dalam bentuk simple present.</li><li><em>'One Piece'</em> adalah object atau objek dari klausa kondisional.</li></ul>

- format json seperti dibawah
    {
        "notes":"",
        "questions" : [
             {
                 "question": "",
                 "answer": "",
                 "explanation": ""
             }
        ]
    }

```

**Prompt untuk tambah pertanyaan**
```prompt
buatkan lagi pertanyaan yang berbeda
```

## Daftar Materi Bahasa Inggris Yang Bisa Dipelajari

### Tenses
- Simple Present
- Present Continuous
- Present Perfect
- Present Perfect Continuous
- Simple Past
- Past Continuous
- Past Perfect
- Past Perfect Continuous
- Simple Future
- Future Continuous
- Future Perfect
- Future Perfect Continuous

### Modal Verbs
- Can
- Could
- Will
- Would
- Shall
- Should
- May
- Might
- Must
- Ought to

### Voice and Mood
- Imperative Mood
- Subjunctive Mood
- Infinitive
- Gerunds

### Parts of Speech
- Nouns
- Pronouns
- Verbs
- Adjectives
- Adverbs
- Prepositions
- Conjunctions
- Interjections

### Sentence Structures
- Simple Sentences
- Compound Sentences
- Complex Sentences
- Compound-Complex Sentences

### Punctuation
- Period
- Comma
- Semicolon
- Colon
- Dash
- Hyphen
- Parentheses
- Quotation Marks
- Apostrophe

### Idiomatic Expressions
- Phrasal Verbs
- Idioms
- Slang
- Colloquialisms

### Vocabulary and Spelling
- Synonyms and Antonyms
- Homophones and Homonyms
- Prefixes and Suffixes

### Reading and Listening Comprehension
- Skimming and Scanning
- Context Clues
- Inference

### Writing Skills
- Paragraph Writing
- Essay Writing
- Business Emails
- Academic Writing

### Speaking and Pronunciation
- Intonation
- Stress
- Rhythm
- Phonemes

### Cultural Context
- Formal vs. Informal Language
- American vs. British English
- Social Norms and Taboos

### Advanced Grammar Topics
- Clauses: Independent and Dependent Clauses
- Determiners: Articles, Demonstratives, Quantifiers
- Transitive and Intransitive Verbs
- Direct and Indirect Objects
- Subject-Verb Agreement
- Parallel Structure
- Modifiers: Adjective and Adverb Placement, Dangling Modifiers
- Ellipsis and Substitution
- Cleft Sentences
- Inversion
- Tag Questions
- Reported Speech
- Conditionals: Mixed Conditionals, Inverted Conditionals
- Relative Pronouns and Relative Clauses
- Question Tags
- Noun Phrases and Verb Phrases
- Conjunctive Adverbs
- Interrogatives: Embedded Questions
- Negations: Double Negatives, Formal Negations
- Tense Aspects: Progressive, Perfect, Perfect-Progressive
- Mood: Indicative, Imperative, Subjunctive, Conditional
- Active vs Passive Voice: Advanced usages and variations

### Advanced Topics
- Discourse Markers
- Cohesion and Coherence
- Argumentation and Persuasion
