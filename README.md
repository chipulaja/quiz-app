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
- [Simple Present](./readme/00_tenses/01_simple_present.md)
- [Present Continuous](./readme/00_tenses/02_present_continuous.md)
- [Present Perfect](./readme/00_tenses/03_present_perfect.md)
- [Present Perfect Continuous](./readme/00_tenses/04_present_perfect_continuous.md)
- [Simple Past](./readme/00_tenses/05_simple_past.md)
- [Past Continuous](./readme/00_tenses/06_past_continuous.md)
- [Past Perfect](./readme/00_tenses/07_past_perfect.md)
- [Past Perfect Continuous](./readme/00_tenses/08_past_perfect_continuous.md)
- [Simple Future](./readme/00_tenses/09_simple_future.md)
- [Future Continuous](./readme/00_tenses/10_future_continuous.md)
- [Future Perfect](./readme/00_tenses/11_future_perfect.md)
- [Future Perfect Continuous](./readme/00_tenses/12_future_perfect_continuous.md)
- [Simple Past Future](./readme/00_tenses/13_simple_past_future.md)
- [Past Future Continuous](./readme/00_tenses/14_past_future_continuous.md)
- [Past Future Perfect](./readme/00_tenses/15_past_future_perfect.md)
- [Past Future Perfect Continuous](./readme/00_tenses/16_past_future_perfect_continuous.md)

### Modal Verbs
- [Can](./readme/01_modal/01_can.md)
- [Could](./readme/01_modal/02_could.md)
- [Will](./readme/01_modal/03_will.md)
- [Would](./readme/01_modal/04_would.md)
- [Shall](./readme/01_modal/05_shall.md)
- [Should](./readme/01_modal/06_should.md)
- [May](./readme/01_modal/07_may.md)
- [Might](./readme/01_modal/08_might.md)
- [Must](./readme/01_modal/09_must.md)
- [Ought to](./readme/01_modal/10_ought_to.md)

### Voice and Mood
- [Imperative Mood](./readme/02_voice_and_mood/01_imperative_mood.md)
- [Subjunctive Mood](./readme/02_voice_and_mood/02_subjunctive_mood.md)
- [Infinitive](./readme/02_voice_and_mood/03_infinitive.md)
- [Gerunds](./readme/02_voice_and_mood/04_gerunds.md)

### Parts of Speech
- [Nouns](./readme/03_parts_of_speech/01_nouns.md)
- [Pronouns](./readme/03_parts_of_speech/02_pronouns.md)
- [Verbs](./readme/03_parts_of_speech/03_verbs.md)
- [Adjectives](./readme/03_parts_of_speech/04_adjectives.md)
- [Adverbs](./readme/03_parts_of_speech/05_adverbs.md)
- [Prepositions](./readme/03_parts_of_speech/06_prepositions.md)
- [Conjunctions](./readme/03_parts_of_speech/07_conjunctions.md)
- [Interjections](./readme/03_parts_of_speech/08_interjections.md)

### Sentence Structures
- [Simple Sentences](./readme/04_sentence_structures/01_simple_sentences.md)
- [Compound Sentences](./readme/04_sentence_structures/02_compound_sentences.md)
- [Complex Sentences](./readme/04_sentence_structures/03_complex_sentences.md)
- [Compound-Complex Sentences](./readme/04_sentence_structures/04_compound_complex_sentences.md)

### Punctuation
- [Period](./readme/05_punctuation/01_period.md)
- [Comma](./readme/05_punctuation/02_comma.md)
- [Semicolon](./readme/05_punctuation/03_semicolon.md)
- [Colon](./readme/05_punctuation/04_colon.md)
- [Dash](./readme/05_punctuation/05_dash.md)
- [Hyphen](./readme/05_punctuation/06_hyphen.md)
- [Parentheses](./readme/05_punctuation/07_parentheses.md)
- [Quotation Marks](./readme/05_punctuation/08_quotation_marks.md)
- [Apostrophe](./readme/05_punctuation/09_apostrophe.md)

### Idiomatic Expressions
- [Phrasal Verbs](./readme/06_idiomatic_expressions/01_phrasal_verbs.md)
- [Idioms](./readme/06_idiomatic_expressions/02_idioms.md)
- [Slang](./readme/06_idiomatic_expressions/03_slang.md)
- [Colloquialisms](./readme/06_idiomatic_expressions/04_colloquialisms.md)

### Vocabulary and Spelling
- [Synonyms and Antonyms](./readme/07_vocabulary_and_spelling/01_synonyms_and_antonyms.md)
- [Homophones and Homonyms](./readme/07_vocabulary_and_spelling/02_homophones_and_homonyms.md)
- [Prefixes and Suffixes](./readme/07_vocabulary_and_spelling/03_prefixes_and_suffixes.md)

### Reading and Listening Comprehension
- [Skimming and Scanning](./readme/08_reading_and_listening_comprehension/01_skimming_and_scanning.md)
- [Context Clues](./readme/08_reading_and_listening_comprehension/02_context_clues.md)
- [Inference](./readme/08_reading_and_listening_comprehension/03_inference.md)

### Writing Skills
- [Paragraph Writing](./readme/09_writing_skills/01_paragraph_writing.md)
- [Essay Writing](./readme/09_writing_skills/02_essay_writing.md)
- [Business Emails](./readme/09_writing_skills/03_business_emails.md)
- [Academic Writing](./readme/09_writing_skills/04_academic_writing.md)

### Speaking and Pronunciation
- [Intonation](./readme/10_speaking_and_pronunciation/01_intonation.md)
- [Stress](./readme/10_speaking_and_pronunciation/02_stress.md)
- [Rhythm](./readme/10_speaking_and_pronunciation/03_rhythm.md)
- [Phonemes](./readme/10_speaking_and_pronunciation/04_phonemes.md)

### Cultural Context
- [Formal vs. Informal Language](./readme/11_cultural_context/01_formal_vs_informal_language.md)
- [American vs. British English](./readme/11_cultural_context/02_american_vs_british_english.md)
- [Social Norms and Taboos](./readme/11_cultural_context/03_social_norms_and_taboos.md)

### Advanced Grammar Topics
- [Clauses: Independent and Dependent Clauses](./readme/12_advanced_grammar_topics/01_clauses_independent_and_dependent_clauses.md)
- [Determiners: Articles, Demonstratives, Quantifiers](./readme/12_advanced_grammar_topics/02_determiners_articles_demonstratives_quantifiers.md)
- [Transitive and Intransitive Verbs](./readme/12_advanced_grammar_topics/03_transitive_and_intransitive_verbs.md)
- [Direct and Indirect Objects](./readme/12_advanced_grammar_topics/04_direct_and_indirect_objects.md)
- [Subject-Verb Agreement](./readme/12_advanced_grammar_topics/05_subject_verb_agreement.md)
- [Parallel Structure](./readme/12_advanced_grammar_topics/06_parallel_structure.md)
- [Modifiers: Adjective and Adverb Placement, Dangling Modifiers](./readme/12_advanced_grammar_topics/07_modifiers_adjective_and_adverb_placement_dangling_modifiers.md)
- [Ellipsis and Substitution](./readme/12_advanced_grammar_topics/08_ellipsis_and_substitution.md)
- [Cleft Sentences](./readme/12_advanced_grammar_topics/09_cleft_sentences.md)
- [Inversion](./readme/12_advanced_grammar_topics/10_inversion.md)
- [Tag Questions](./readme/12_advanced_grammar_topics/11_tag_questions.md)
- [Reported Speech](./readme/12_advanced_grammar_topics/12_reported_speech.md)
- [Conditionals: Mixed Conditionals, Inverted Conditionals](./readme/12_advanced_grammar_topics/13_conditionals_mixed_conditionals_inverted_conditionals.md)
- [Relative Pronouns and Relative Clauses](./readme/12_advanced_grammar_topics/14_relative_pronouns_and_relative_clauses.md)
- [Question Tags](./readme/12_advanced_grammar_topics/15_question_tags.md)
- [Noun Phrases and Verb Phrases](./readme/12_advanced_grammar_topics/16_noun_phrases_and_verb_phrases.md)
- [Conjunctive Adverbs](./readme/12_advanced_grammar_topics/17_conjunctive_adverbs.md)
- [Interrogatives: Embedded Questions](./readme/12_advanced_grammar_topics/18_interrogatives_embedded_questions.md)
- [Negations: Double Negatives, Formal Negations](./readme/12_advanced_grammar_topics/19_negations_double_negatives_formal_negations.md)
- [Tense Aspects: Progressive, Perfect, Perfect-Progressive](./readme/12_advanced_grammar_topics/20_tense_aspects_progressive_perfect_perfect_progressive.md)
- [Mood: Indicative, Imperative, Subjunctive, Conditional](./readme/12_advanced_grammar_topics/21_mood_indicative_imperative_subjunctive_conditional.md)
- [Active vs Passive Voice: Advanced usages and variations](./readme/12_advanced_grammar_topics/22_active_vs_passive_voice_advanced_usages_and_variations.md)

### Advanced Topics
- [Discourse Markers](./readme/13_advanced_topics/01_discourse_markers.md)
- [Cohesion and Coherence](./readme/13_advanced_topics/02_cohesion_and_coherence.md)
- [Argumentation and Persuasion](./readme/13_advanced_topics/03_argumentation_and_persuasion.md)
