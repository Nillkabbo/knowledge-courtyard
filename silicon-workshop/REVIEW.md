# সিলিকনের সাথে কথা — Engineering Review (Book 56)

**Reviewer pass:** 16 Aug 2026 · full technical audit
**Scope:** every formula, every C snippet, every register name, all 48 SVGs, continuity across all 16 doors, and a gap analysis against what a complete electronics→IoT curriculum must contain.

> **Status — Stages 1 and 3 complete.**
>
> **Stage 1** (`d674538`) — all six code/arithmetic errors fixed, ASCII sweep applied (101 replacements), verse and cross-reference mismatches resolved, 37 Bengali typos corrected, the Door 16 capstone rewritten for real ESP32 hardware, Door 16's missing failure callout written.
>
> **Stage 3** (`9247c8b`) — shared `<defs>` and a 35-symbol schematic library added to `index.html`; the 49 non-rendering arrowheads now work; `.lbl-left`/`.lbl-right` added; all 7 hidden orphans removed; **twelve figures redrawn as true schematics** and verified by rasterising each one.
>
> Two figures turned out to have wiring errors, not just cosmetic ones: Door 5's blinker had the MCU input tapped to VCC rather than the divider midpoint, and Door 9's pull-up was on the wrong node. Door 6's shunt was an open circuit because its only return path was among the hidden elements. All four door files parse; all 16 doors load with the full element set.
>
> The repeatable method, the tooling, and a handoff checklist live in [`scripts/book-review/PLAYBOOK.md`](../scripts/book-review/PLAYBOOK.md).
>
> **All six stages complete, plus a verification pass.** Re-ran `scripts/book-review/audit.py` end to end: escaped a literal `<` that had leaked into a Door 6 code-block and SVG label (would have truncated content on render), converted four stray Bengali-numeral subscripts (`v১`→`v1`, `R১`→`R1`, `R২`→`R2`) to ASCII, and confirmed the seven doors newly showing 4 diagrams (1, 3, 5, 6, 12, 13, 16) are all legitimate — one new figure each from Stages 4/5, cross-checked by title against the stage commit messages.
>
> That pass also caught a real gap in the audit tool itself: its label-overflow heuristic used a flat 6px/char estimate, which underestimates real Noto Sans Bengali glyph width badly enough to miss genuine overflows. Recalibrated to a font-size-aware estimate (swept EM from 0.45–0.70 against this book's 55 already-verified diagrams to find the value with zero false positives) and it immediately found two confirmed defects the flat estimate had missed: the new Thévenin figure's rule-of-thumb caption (Door 6) and the boot/RTOS figure's closing note (Door 14) both ran off their frames. Both split across two lines and re-rendered clean. `audit.py` now carries the calibrated constant for future books.
>
> Final state: `node --check` clean on all four door files, all 16 doors load with the full field set, HTML balanced, zero unescaped code-blocks, zero hidden orphans, zero unresolved symbol/marker references, 55 diagrams total. The only `audit.py` output left is the 9 confirmed-intentional structural deviations above.
>
> **Stage 6** — done: study/ apparatus shipped. quiz.json (50 questions, single-correct validated) · flashcards.json (74 cards) · mind-map.json (4-arc tree) · study-guide.md (starter-kit BOM ~4,300-4,800 taka, 48 hands-on labs, 26-term glossary, 17-row troubleshooting appendix, further-reading). Panel verified on completion screen.
>
> **Stage 5** — done: all eleven missing-knowledge items closed as code-block sections (structure-preserving) plus two new figures. D2 counterfeit parts · D3 AC/RMS (peak vs p-p vs RMS, 220→311V) · D4 mains + Li-ion safety (one-hand rule, isolation, BMS) · D5 soldering (temp, tinning, good/cold/bridge) + solder-joint figure · D6 Thévenin/loading (V_th/R_th, 10× rule, ADC source-impedance) + loaded-divider figure · D11 non-blocking state machine + millis() rollover idiom · D12 op-amp buffer/follower + anti-alias · D14 ground topology (star vs daisy, AGND/DGND) · D15 protocol stack under MQTT (radio→IP→TCP→TLS→MQTT debug ladder) + NTP · D16 two-point calibration + EMA + accuracy/precision/resolution. 55 diagrams, all browser-verified clean.
>
> **Stage 4** — done: the requirements notebook is now a figure in Door 1 (পাঁচ প্রশ্ন) and reprinted ticked in Door 16 (every line → its component + door), making future drift structurally impossible. Build 8 buys the DHT22 (closes the never-bought temperature sensor); Build 12 justifies the LDR (sleep policy + open-case alert); cadence unified at 15 min. Book now 53 diagrams. (Anchor lesson re-learned: table text-anchor must be inline style, not presentation attr — CSS class wins.)
>
> **Stage 3 Tier 4** — done: all 12 SVG findings cleared (label spills split into two lines or lbl-left anchored; resistor-band hardcoded colours → .cell/.cell-amber/.cell-dim palette classes, properly svg-scoped; ADC১/ADC২ → ASCII). Three mismatched photos swapped (D11 multimeter→DS3231 PCB, D12 solar→RGB LED, D15 multimeter→ESP32-C3 board); 74HC00 and enclosure photos not on Commons — D7/D16 keep topic-adjacent photos. Audit now reports only the 5 intentional structural deviations (4-diagram doors 3/12/13; 2-dialogue doors 14/16). Browser: 16/16 doors, 51 diagrams, 0 issues.
>
> **Stage 3 Tier 2** — done: RC curve rebuilt on a true exponential path (τ dot now ON the curve, browser-verified 0.4px; axis ticks τ…5τ≈99%); PWM duty figure redrawn with real time axis + T-brackets; UART frame rebuilt with bit-grid and LSB-first labels ('A'=0x41); three NEW figures — ADC quantisation staircase (D12), I²C transaction START→ACK→STOP dual-rail (D13), rectifier ripple with ΔV≈I·t÷C (D3). Book now 51 diagrams. Incident: an editing regex truncated doors-9-12.js (door 12 lost); recovered from 9247c8b via one-path verify-first rebuild, all structure re-verified. Lesson: multi-step story edits need verify-before-write + door-count gate.
>
> **Stage 2** — done in-session after playbook handoff: two-chip framing woven into Door 8 (Uno = স্বচ্ছ চিপ / ESP32 = মাঠের চিপ, "কৌশল একই — পোশাক বদলায়"), ESP32-equivalent "অন্য চিপে" boxes appended inside Doors 9–12 code-blocks (gpio_set_level, gpio_isr_handler_add + IRAM_ATTR, esp_timer, adc_oneshot_read + ADC2/WiFi warning), Door 14 build-note already JTAG-correct from Stage 1. All four door files parse; browser-verified.

---

## Verdict up front

This is a genuinely good book. The pedagogy is the strongest part: the water metaphor holds all the way from Door 1 to Door 16, the "ব্যর্থতা আগে" failure-first callout is a better teaching device than most published embedded texts use, and the 16-part নির্মাণ-পর্ব build thread — one real device assembled brick by brick — is the thing that makes it a *book* and not a topic list. The structural discipline is near-perfect: 16 doors × (scene · 3 dialogues · warn · stats · code · 3 diagrams · verse · build · secret · senior checklist), with only two deviations in the whole corpus.

The problems fall into four buckets, in order of how much they hurt a reader:

1. **A hard MCU contradiction running through Doors 8–16.** Door 8 commits to ESP32; Doors 9–12 teach AVR registers; Door 16's capstone is ESP32 again — and the capstone code carries ESP32-specific bugs that come from that seam. This is the single most damaging issue.
2. **Six real technical errors** in code and arithmetic that will produce wrong results if a reader types them in.
3. **The diagrams are labelled block-boxes, not schematics** — plus 49 arrowheads that don't render at all, 7 hidden orphan elements, two visibly broken circuits, and ~20 wires drawn straight through their own labels.
4. **Missing layers**: no AC/RMS, no Thévenin/loading, no op-amp signal conditioning, no soldering chapter (in a book set in a soldering workshop), no mains safety, no Li-ion safety, no IP layer beneath MQTT, no state machines, no calibration.

Nothing here requires rewriting the book. The narrative spine is sound; this is a correction-and-extension pass.

---

## PART 1 — Technical errors (fix these first)

### 1.1 The AVR/ESP32 seam — architectural, Doors 8–16

Build 8 (`doors-5-8.js:743`) commits the project: *"ESP32-DevKit নির্বাচিত (WiFi-সহ, ৩.৩V, ADC×১২…)"*.

Then:

| Door | Teaches | Exists on ESP32? |
|---|---|---|
| 9 | `DDRB`, `PORTB`, `_delay_ms`, avrdude | ✗ |
| 10 | `ISR(INT0_vect)`, `EICRA`, `EIMSK`, `sei()` | ✗ |
| 11 | `TCCR1B`, `OCR1A`, `TIMSK1`, `wdt_enable` | ✗ |
| 12 | `ADMUX`, `ADCSRA`, `ADPS`, `TCCR0A` | ✗ |
| 14 | build note says "SWD-প্যাড বোর্ডে" | ✗ — ESP32 is JTAG |
| 16 | `attachInterrupt`, `analogWrite`, `WiFi.h` | ✓ ESP32 again |

The reader is told they are building an ESP32 node and then spends four doors writing registers that do not exist on it.

**This is fixable without touching the register teaching, which is valuable.** Two options:

- **(A) Two-chip framing, recommended.** Make it explicit and narrative: the workshop keeps an ATmega328P on the bench as *the transparent chip* — the one you can see all the way through — and the ESP32 as *the field chip*. Add one paragraph in Door 8 where Farhan says exactly that, and a short "same idea, other chip" box at the end of Doors 9–12 giving the ESP32-IDF equivalent (`gpio_set_level`, `gpio_isr_handler_add`, `esp_timer`, `adc_oneshot_read`). This turns the seam into the book's best transferable lesson: *the register method survives the chip change*.
- **(B) Re-target Doors 9–12 to ESP32.** Cheaper to state, much worse pedagogically — ESP32 registers are not readable at this level, and the AVR examples are the clearest in the book. Not recommended.

Whichever you pick, fix Build 14: ESP32 debugs over **JTAG**, not SWD. (Keep SWD in the Door 14 *teaching* — it's the ARM standard and worth knowing — but the project's own pads must be labelled correctly.)

### 1.2 Six code and arithmetic errors

**① Door 12 — ADC prescaler is wrong** (`doors-9-12.js`, code block)

```c
ADCSRA = (1<<ADEN) | (1<<ADPS2) | (1<<ADPS1);   // "÷৬৪ (১২৫kHz মিষ্টি-স্পট)"
```

ADPS[2:0] = `110` = **÷64** → 16 MHz / 64 = **250 kHz**, not 125 kHz. Worse, the AVR datasheet requires the ADC clock to be **50–200 kHz** for full 10-bit accuracy, so this setting silently degrades resolution — exactly the bug the comment claims to be avoiding.

**Fix:** add `ADPS0` → `111` = ÷128 → 125 kHz.

```c
ADCSRA = (1<<ADEN) | (1<<ADPS2) | (1<<ADPS1) | (1<<ADPS0);  // ÷১২৮ → ১২৫kHz
```

**② Door 12 — PWM frequency is wrong**

```c
TCCR0A = (1<<COM0A1) | (1<<WGM00) | (1<<WGM01);  // Fast PWM, 8-bit
TCCR0B = (1<<CS01);                              // "÷৮ → ~৩.৯kHz @১৬MHz"
```

Fast PWM 8-bit at ÷8 is 16 MHz / (8 × 256) = **7812.5 Hz**. The 3.9 kHz figure belongs to *phase-correct* PWM (÷8 × 510 counts = 3921 Hz). Either correct the comment to ~৭.৮kHz, or drop `WGM01` to make it genuinely phase-correct — and this is a good place to teach *why* motor drives often prefer phase-correct mode.

**③ Door 11 — Hz confused with µs**

> "Timer0 ÷৬৪ → প্রায় ৯৭৬.৬ μs/ওভারফ্লো"

256 × 64 / 16 MHz = **1024 µs per overflow**. 976.6 is the overflow *rate in Hz*. Write: *"১০২৪ μs/ওভারফ্লো (≈৯৭৬.৬ বার/সেকেন্ড)"* — and this is precisely why Arduino's `millis()` needs its fractional-remainder correction, which the very next line alludes to. Getting the number right makes that line land.

**④ Door 4 — battery-life arithmetic contradicts itself three ways**

- `doors-1-4.js:582` — 2000 mAh ÷ 1.1 mA ≈ 1818 h ≈ **75 days** ✓ correct
- `doors-1-4.js:692, :704` — 1.2 mA → **70 days** ✓ correct
- `doors-1-4.js:633` diagram — *"গড় I = ০.১২mA … ২০০০mAh ÷ ০.১২mA ≈ ৭৫ দিন"* ✗ **2000 / 0.12 = 16,667 h = 694 days**

The diagram reuses the "75 days" answer with a current ten times smaller. Pick one duty-cycle scenario for the whole door and propagate it; right now Door 4 quotes three different average currents for the same device.

**⑤ Door 16 — the capstone will not run on an ESP32**

```c
int raw = analogRead(SOIL_PIN);
float v  = raw * 3.3 / 1023.0;        // ✗ ESP32 ADC is 12-bit: 0…4095
int pct  = map(raw, 1023, 300, 0, 100); // ✗ same
analogWrite(VALVE_PIN, duty);          // ✗ needs core ≥3.0; else ledcWrite
attachInterrupt(..., onRain, FALLING); // ✗ ISR needs IRAM_ATTR on ESP32
```

Four separate problems, plus two conceptual ones:

- **`deepSleepTilNext()` at the bottom of `loop()`** contradicts the persistent `mqtt.loop()` above it. ESP32 deep sleep is a *reset* — execution never returns to `loop()`, and the MQTT session dies with it. The real architecture is: wake → connect → publish → sleep, all inside `setup()`, with `loop()` empty. As written the reader gets a device that either never sleeps or never publishes. Worth making this the door's final "ব্যর্থতা আগে" — it's the classic IoT beginner trap and Door 16 is currently the only door without a failure callout.
- **ADC2 vs WiFi.** On the classic ESP32, ADC2 channels are unavailable while WiFi is active. A soil sensor on an ADC2 pin works perfectly on the bench and returns garbage in the field. This deserves a stat-card, not a footnote.
- Also missing: the ESP32 ADC's default attenuation limits the usable range to roughly 0–1.1 V, so a 3.3 V divider output saturates unless `analogSetAttenuation(ADC_11db)` is called — and even then the top of the range is non-linear.

**⑥ Door 13 — Bengali numerals inside C register names**

`UBRR০`, `UCSR০B`, `UDR০` will not compile. Same class of problem across the book: `TCNT১`/`OCR১A` in the Door 11 diagram (while the code block 20 lines later correctly writes `OCR1A`), `২N222২` for 2N2222, `১N414৮` for 1N4148, `IRLZ৪৪N`, `TP৪০৫৬`, `MCP১৭০০`, `DS৩২৩১`, `৭৪HC০০`, `MAX৪৮৫`, `SX১২৭৬`, `nRF২৪L০১`, and three different renderings of hex in a single Door 13 diagram (`০x৬৮`, `০x৪A`, `০x3C`).

**Recommended global rule, stated once in the front matter and applied everywhere:** *prose numbers in Bengali; part numbers, register names, hex/binary literals, and anything a reader would type or search for stays in ASCII.* This is a mechanical find-and-replace and it removes an entire class of reader confusion.

### 1.3 Smaller technical notes

| Where | Issue | Fix |
|---|---|---|
| Door 7 | "LOW = ০~০.৮V, HIGH = ২.০~৩.৩V" is the **LVTTL** threshold, presented as if universal. Pure CMOS is 0.3·VDD / 0.7·VDD. | Say which family; add the CMOS numbers alongside. The difference is exactly why 3.3 V→5 V direct connection sometimes works and sometimes doesn't. |
| Door 8 | "সীমা ~২০-৪০mA/পিন" conflates ATmega's 20 mA recommended / 40 mA absolute-max with the ESP32's much lower ~12 mA. | Split by chip; introduce the **absolute-maximum vs recommended-operating** distinction here — it's a datasheet-literacy lesson the book otherwise never teaches. |
| Door 12 | `raw * 5.0 / 1023.0` | Defensible convention, but a one-line footnote on 1023-vs-1024 (the ADC returns a floor, so 1024 is the better estimator) is the kind of precision this book otherwise has. |
| Door 12 | Arduino example uses pin 9 (Timer1/OC1A); the bare-metal example uses OC0A/PD6 (pin 6) | Use pin 6 in both, or say explicitly why they differ. |
| Door 10 | Button on `INT0` with no debounce | Door 7 just taught debounce — a switch on an edge interrupt will fire 5–20 times per press. One line closing that loop makes both doors better. |
| Door 3 | BJT base resistor given as "১kΩ" with no derivation | Show it: I_B = (3.3 − 0.7)/1k = 2.6 mA; with forced β≈10 that saturates ~26 mA of collector current. Add V_CE(sat) and the idea of base overdrive for switching. MOSFET side needs V_GS(th) and R_DS(on) — currently one line. |
| Door 15 | `mqtt.loop()` with no reconnect logic; LWT appears only in a diagram title, never in code; SSID/password hardcoded | Add a `reconnect()` with backoff (the #1 PubSubClient failure), put LWT in the code, and note that credentials in source is a practice to outgrow (provisioning). |
| Door 15 | Bengali topic names (`home/রুম১/তাপ`) | Legal UTF-8 per spec, but flag it as unusual; real fleets use ASCII topics. |
| Door 15/16 | Bengali pseudocode (`if (পাঠ-সময়)`) sits inside blocks that are otherwise real, compilable C | Mark pseudocode visually so the reader knows what to type and what to write themselves. |
| Door 16 | `map(raw, 1023, 300, 0, 100)` with no calibration procedure | Teach the two-point calibration (dry air / submerged) — capacitive probes vary part-to-part and this hardcoded pair will be wrong for the reader's probe. |
| Door 16 | Build 16 BOM says **বাক** (buck) while the same door's build note says **MCP1700** (LDO) — and Build 4 explicitly rejected the buck | Pick one. Note the engineering reality: MCP1700 is 250 mA max and an ESP32 WiFi TX burst is ~250–350 mA. The LDO is genuinely marginal — this is a great place for a real design-review moment rather than a silent inconsistency. |

---

## PART 2 — Content consistency

### 2.1 The build thread drifts (fixable, high value)

The 16 নির্মাণ-পর্ব notes are the book's best structural idea. Four drifts to close:

- **Temperature sensor never bought.** Build 1 records the client asking for *"আর্দ্রতা+তাপ"*. No thermometer is ever selected in Builds 2–16, and Door 16's BOM has none — yet Door 12's dialogue reads "তাপ ≈ ২৮°C" off an unnamed sensor and Build 15 publishes temperature. Either add a DHT22/SHT31/DS18B20 purchase (Build 8 or 12 is the natural slot — and it's a free excuse to teach one-wire or I²C sensor integration), or drop temperature from the Door 1 requirements.
- **LDR arrives from nowhere** in Build 12 and persists into the final device, though light was never a requirement.
- **Cadence**: Door 4 budgets on "প্রতি ১০ মিনিটে ৩সে"; Build 11 sets 900 s / 15 minutes. The 70-day figure is never recomputed.
- **Enclosure** appears only in Door 16 ("IP৬৫ কেস"), though the প্রয়োজন-খাতা framing implies every requirement traces back to Build 1.

**Suggested fix:** add a single "প্রয়োজন-খাতা" table — the requirements notebook itself — as a diagram in Door 1, then reprint it in Door 16 with each line ticked and the component that answered it. That one addition makes the drift impossible and turns the build thread into the book's spine visibly rather than implicitly.

### 2.2 Structural gaps

- **Door 16 has no `callout warn`** — the only door of sixteen without a "ব্যর্থতা আগে". The deep-sleep/MQTT contradiction described above is the natural content for it.
- **Door 14 has 2 dialogue pairs**, every other door except 16 has 3.
- **Doors 4 and 12 print the identical verse block** (17:29) — the only verse repeated in the book.
- **Door 8's `spirit` field cites ৬২:১০** but the verse block prints **৯:১০৫**; **Door 13's secret-box cites ২৭:২৯-৩০** while the verse prints **২৭:৩০**.
- **Wrong cross-reference:** `doors-1-4.js:543` points the GPIO→BJT→motor ladder at "Door ৯"; motor/valve driving is **Door ১২**.

### 2.3 English coverage

Only `scene-setting`, `dialogue`, and `recall.aen` have English mirrors. All 48 diagram titles and captions, all callouts, all stat-grids, all code-block annotations, all verses, all secret-boxes and all 80 senior-checklist items are Bengali-only — roughly **70% of the word count has no English side**, despite the title screen presenting the book as bilingual.

This is a deliberate-looking choice and it is defensible, but it is worth deciding explicitly. The cheapest high-value fix: mirror the **48 diagram captions** and the **80 senior-checklist items**. Those two sets carry the actual takeaways and total maybe 3,000 words.

### 2.4 Character and language

**Contradictions:**
- Iqbal (Door 6) wears "নীল শার্ট" in one sentence and keeps a plug in his "পাঞ্জাবির বুকপকেট" in the next.
- Door 9's handoff already tells us Muaz is the muezzin's son; Muaz then introduces the same fact as news in Door 10.
- Three characters each claim the workshop's top floor/roof (Doors 7, 10–11, 15).
- Doors 6 and 7 both run an "ইন্টারকম" workshop in consecutive doors; Zahed's actual work is doorbells.

**Repetition worth trimming:** the 220 Ω LED calculation is worked three times with identical numbers (Doors 1 code block, Door 1 secret-box, Door 3 code block) by two different mentors; "প্রতি VCC-পায়ে ১০০nF" is asserted **12 times**, eight of them inside Door 2 alone; the 2000 mAh ÷ 50 mA = 40 h example appears four times inside Door 4.

**Typos found** (file:line): যখর→যখন (1-4:26), দোল কাবে→দোল থামাবে (1-4:345), ভোল্টেট→ভোল্টেজ (1-4:369), রেশনি→রেশন (1-4:383), দাতে→দাও (1-4:531), খেকে→খেয়ে (1-4:557), যায়গীন (1-4:582, nonsense), বায়না→বেহাত (1-4:600), হিসায়→হিসাব (5-8:579), মাস খেঁচে→মাস খুঁজে (5-8:593), **পULSE** mixed-script mojibake (5-8:546), মস্তিষ্ঠ→মস্তিষ্ক (5-8:743), আয়ন্ত্রিক→নিয়ন্ত্রিত (9-12:133), এক পাওওয়া→এক পা-ও যাওয়া (9-12:200), এ য়→এ-ই (9-12:430), মর্সেম→মরসুম (9-12:622), ৩.৩.০→৩.৩ (9-12:692), ভনিতা→ভনভনানি (13-16:16).

**Inconsistent transliteration:** ক্যাপাসিটর ×12 vs ক্যাপাসিটার ×1 (both in diagram titles), ট্রানজিস্টর ×28 vs ট্রানজিস্টার ×1, অসিলোসকোপ vs অসিলোস্কোপ, আযান ×20 vs আজান ×2, হার্জ vs হার্টজ. Also `৪৭₀μF` mixes Bengali digits with a Unicode subscript zero, and `V_out = V_in × R₂/(R₁+R২)` mixes subscript ₂ and Bengali ২ **in the same formula**.

---

## PART 3 — Visuals

You asked for clearer circuit diagrams. Here is what the audit of all 48 SVGs found, then the plan.

### 3.1 Three global defects — one-line fixes, book-wide effect

**① Every arrowhead in the book is invisible.** `style.css` lines 180–182 set `marker-end:url(#arrowFire)`, `url(#arrowTeal)`, `url(#arrowAmber)` on `.edge-hot`, `.edge-cyan`, `.edge-amber`. **No `<defs>` block exists anywhere in the project** (`grep -c "<defs" doors-*.js index.html` → 0). All **49 directed edges render as plain undirected lines** — signal-flow arrows, current arrows, boot-sequence arrows, MQTT publish arrows. Every diagram that depends on direction currently reads as a static blob.

Fix: one shared `<defs>` in `index.html`, before the door scripts run.

**② `.lbl`, `.lbl-sm`, `.lbl-cyan`, `.lbl-hot` all force `text-anchor:middle`.** Twelve figures place obviously left-aligned lists at a left-hand x-coordinate, so the text renders centred on that point and spills leftward — worst case 33 px outside the breadboard rectangle in Door 5, and in Door 15 a caption clipped off the left edge of the viewBox entirely. Only one figure in the book (Door 16's BOM) works around it with `style="text-anchor:start"`.

Fix: add `.lbl-left{text-anchor:start}` / `.lbl-right{text-anchor:end}` and apply.

**③ Seven `visibility="hidden"` orphans** left in the markup (Doors 2, 5, 6 ×2, 10, 13, 14, 16) — and in Door 6's current-shunt figure **the hidden elements were the only return path**, leaving a visibly open circuit on the page.

### 3.2 The ten worst figures

1. **Door 6 · কারেন্ট-শান্ট** — visibly open circuit; both return risers hidden; ground run dead-ends.
2. **Door 14 · লিংকার-ম্যাপ** — every section label is one row off-register and painted on top of the *wrong* memory bar (`.text` label sits on `.rodata`, `.data` on `.bss`).
3. **Door 2 · RC বক্ররেখা** — the τ dot sits 28 px off the plotted curve; the "৫τ" label is 190 px away from the 5τ gridline; the capacitor is an empty box with no plates and no leads.
4. **Door 13 · তিন ডাক-ব্যবস্থা** — the SCL bus line connects to nothing; the SPI heading collides with the "দাস ১" cell.
5. **Door 5 · LDR ডিভাইডার** — 72 px of the "V_out → ADC" label struck through by a wire; the wire terminates on the *side* of the LDR body; duplicated and dangling GND rail.
6. **Door 2 · রিলে + ফ্লাইব্যাক** — the flyback diode is electrically floating, neither end on a rail, while slicing through two labels. This is the door's key safety lesson and the figure gets it wrong.
7. **Door 8 · MCU শহর-মানচিত্র** — the ADC/PWM stub misses the bus by 10 px; three GPIO pin lines float 10 px clear of the block.
8. **Door 9 · LED ও বাটনের তার** — the pull-up is attached to the wrong node (it shorts +3.3 V to the MCU pin with the resistor hanging off); LED and button both dangle with no ground despite labels saying "→ GND". This is the reader's *first wiring diagram*.
9. **Door 5 · ব্রেডবোর্ড** — three labels spill outside the board rectangle; duplicate dashed centre-channel dividers 15 px apart.
10. **Door 7 · ৭৪HC০০** — pin names painted over the chip body and over a pin dot; four pin names crammed on one baseline though the pins they label are 20 px apart; all pin dots drawn inside the body.

Plus: Door 7's truth table has its bottom row clipped 2 px below the viewBox; Door 12's PWM waveforms start mid-air rather than on the low rail; ~20 figures run a wire straight through its own label; four figures hardcode colours (`#d4c5a9`, `#8a7a5c`, `#c9a86a`, `#111`) that bypass the CSS variables.

### 3.3 The real problem: these are block diagrams, not schematics

Even the geometrically correct figures draw a resistor as a **rectangle**, a transistor as a **labelled box**, a battery as a **rect**, a capacitor as an **ellipse**. A reader who finishes this book cannot read a real schematic, which is what Door 5 explicitly promises to teach.

**Proposal: a shared symbol library.** One `<defs>` block, injected once in `index.html`, defining proper IEC/IEEE symbols as `<symbol>` elements that every door can `<use>`:

```
Passives    resistor (zigzag + IEC box), capacitor (non-polar / polar),
            inductor, potentiometer, LDR, thermistor, crystal
Active      diode, LED (with emission arrows), zener, NPN, PNP,
            N-MOSFET, P-MOSFET, op-amp triangle
Digital     AND, OR, NOT, NAND, NOR, XOR (distinctive shape),
            D flip-flop, IC/DIP block with numbered pins
Power       battery, cell, VCC rail, GND (earth / chassis / signal),
            fuse, solar cell, regulator block
Connect     junction dot, crossing hop, switch (SPST/SPDT), antenna,
            arrowheads (fire / teal / amber)
```

Roughly 35 symbols, one file, ~250 lines. Every subsequent diagram becomes shorter to write *and* correct by construction, and Door 5's "সিম্বল-চেনা" section stops describing symbols in words and starts showing the exact glyphs the rest of the book uses.

### 3.4 Redraw plan

**Tier 1 — redraw as true schematics** (the 12 that are genuinely circuits):

| Door | Figure | What it should become |
|---|---|---|
| 1 | ওহমের নদী | Battery + resistor + lamp, real symbols, current arrow, V/I/R annotated at the right nodes |
| 2 | রিলে + ফ্লাইব্যাক | Correct NPN, coil with core bars, diode reverse-parallel *across the coil*, emitter to ground symbol |
| 3 | BJT সুইচ | NPN symbol, base resistor, load, ground; add I_B/I_C annotation and the saturation note |
| 3 | ব্রিজ-রেক্টিফায়ার | Four diodes in the classic diamond, transformer secondary, smoothing cap, ripple waveform inset |
| 5 | LED-ব্লিংকার | Full readable schematic with R1/D1/SW1 designators — this figure *is* Door 5's lesson |
| 5 | LDR ডিভাইডার | Divider with LDR on the correct leg, ADC pin tap, decoupling cap |
| 6 | ভোল্টেজ-ডিভাইডার | Add the loaded case beside the unloaded one (see §4.2 — Thévenin) |
| 6 | কারেন্ট-শান্ট | Rebuild; currently open |
| 7 | গেট-সিম্বল | Distinctive-shape gates with truth tables aligned to each |
| 9 | LED ও বাটন | Rebuild; the pull-up is on the wrong node |
| 12 | RGB মিক্সার | Three channels, gate resistors, common-anode/cathode made explicit |
| 16 | পূর্ণ চেইন | Sensor→divider→ADC→MCU→radio→broker as a signal-flow schematic with working arrowheads |

**Tier 2 — waveform/timing figures, redraw with real axes, units and gridlines:**
RC charge curve (fix τ), PWM duty comparison, UART frame bit-by-bit, **new**: I²C start/address/ACK/data/stop transaction, **new**: SPI CPOL/CPHA four-mode timing, **new**: ADC quantisation staircase showing resolution, **new**: rectifier ripple before/after the smoothing cap.

**Tier 3 — new figures for new content** (see Part 4): Thévenin equivalent, op-amp buffer between divider and ADC, ground topology (daisy-chain vs star), RMS vs peak on a sine, non-blocking state machine, soldering joint cross-sections (good / cold / bridge).

**Tier 4 — mechanical fixes** to the remaining ~24 figures: offset labels off their wires, close the 10 px gaps, remove orphans, replace hardcoded colours, unclip Door 7's truth table.

### 3.5 Photos

Five doors carry a photo unrelated to their topic: Door 7 (NAND gates) shows `diode.jpg`; Door 11 (timers/RTC) shows `multimeter.jpg`; Door 12 (PWM/ADC) shows `solar.jpg`; Door 15 (WiFi/MQTT) reuses `multimeter.jpg`; Door 16 reuses `breadboard.jpg`. Wanted: a 74HC00 DIP, a DS3231 module, a servo or RGB LED, an ESP32 antenna close-up, and a finished enclosed device.

---

## PART 4 — Missing knowledge

The book covers its stated 16 topics well. These are the layers a *complete* electronics→IoT book needs that currently aren't there. Ranked by how often their absence will actually hurt the reader.

### 4.1 Soldering — the largest gap

The book opens in a soldering workshop. Sixty years of solder marks on the wall, tin smoke, rosin, a hissing station in Door 2. **And it never teaches soldering.** No iron temperature, no flux, no wetting, no cold-joint diagnosis, no desoldering braid or pump, no SMD rework, no tinning, no safety (lead, ventilation).

This is the book's most conspicuous hole and the easiest to fill beautifully — Mostafiz Chacha's monocle exists precisely to inspect fine joints. **Recommendation: a new door, or a substantial section in Door 5** (which is already the hands-on/instruments door), with cross-section diagrams of a good joint, a cold joint, and a bridge.

### 4.2 Thévenin and the loading effect

Door 6 teaches the voltage divider and Door 12 reads it with an ADC. Between those two facts sits the single most common beginner failure: **connecting a load changes the divider's output.** The book gestures at it once (Door 12's "উৎস-রোধ" note about the sample-and-hold cap) but never gives the reader the tool.

Add to Door 6: source resistance, Thévenin equivalent (V_th, R_th), the rule of thumb that the load should be ≥10× R_th, and the worked case of a 100 kΩ divider feeding an ADC that needs ≤10 kΩ source impedance. This is a half-page that prevents a whole class of "my sensor reads wrong" bugs.

### 4.3 AC fundamentals and RMS

Door 2 introduces reactance (X_C, X_L) and Door 3 has a bridge rectifier, but the book never defines **frequency, period, phase, peak vs peak-to-peak vs RMS**. A reader cannot compute that 220 V RMS mains peaks at 311 V — which is exactly the number that determines the smoothing capacitor's voltage rating in the figure they're looking at. Natural home: Door 2 or Door 3.

### 4.4 Op-amps and signal conditioning

Completely absent. The chain the book teaches is sensor → divider → ADC. The chain real instruments use is sensor → **buffer / amplify / filter** → ADC. Minimum viable addition: the voltage follower (why it fixes §4.2), the non-inverting amplifier with gain, the RC low-pass as an anti-aliasing filter, and the idea of a rail-to-rail single-supply op-amp. This also finally justifies the "sensor" half of the capstone.

### 4.5 Safety — two omissions with real consequences

- **Mains.** Door 4 walks 220 V AC → transformer → rectifier → regulator, and the whole book is set among people repairing mains-powered radios. There is no mains-safety section: isolation transformer, one-hand rule, discharging bulk capacitors before touching a board, why an unearthed scope probe on a live circuit is dangerous. Door 1's "কারেন্ট দেখা যায় না" is the right instinct — it needs a full treatment.
- **Li-ion.** The build uses an 18650 + TP4056 with no mention of the protection circuit (over-discharge, over-current), thermal runaway, why a bare cell without PCM is hazardous, or charge-current selection. One stat-grid in Door 4.

### 4.6 Grounding, noise and EMC

Not covered at all beyond the decoupling capacitor. Wanted: return-current paths, star vs daisy-chain ground, why analogue and digital grounds are separated and where they meet, ground loops, twisted pair, shielding, and why differential signalling (RS-485, already mentioned in Door 13) beats single-ended over distance. This is what separates a board that works on the bench from one that works in a field next to an irrigation pump motor — which is literally the capstone's deployment site.

### 4.7 Firmware architecture — the non-blocking state machine

The book teaches `delay()` → interrupts → timers → RTOS. It skips the step that sits between timers and an RTOS and that most real firmware actually uses: **the non-blocking finite state machine** driven by `millis()`. Door 11's "মিলিস-সময়চেয়ে" diagram is right at the door of it. Add the pattern explicitly, with a state diagram.

Related embedded-C pitfalls worth a box in Door 11 or 14:
- **`millis()` rolls over after 49.7 days** — and the correct `(now - last) >= interval` subtraction idiom that survives rollover. For a device meant to run for months on a battery, this is not academic.
- Integer overflow and why `unsigned long` matters
- Avoid `malloc`/`String` in embedded; stack sizing; how stack overflow actually presents

### 4.8 The network layer under MQTT

Door 15 goes from "WiFi radio" straight to "MQTT broker". Missing entirely: IP addresses, DHCP, DNS, ports, TCP vs UDP, and where TLS actually sits. The study dossier already verifies Cerf & Kahn 1974 — the history is researched but the layer isn't taught. A single stat-grid mapping radio → IP → TCP → TLS → MQTT would close it.

Also missing on the IoT-practice side: **NTP** time sync (the book has an RTC but no way to trust it), **WiFi provisioning** (credentials are hardcoded), and per-device identity/certificates for a fleet.

### 4.9 Sensor calibration and digital filtering

Door 12 mentions 10-sample averaging. Missing: two-point calibration (the capstone's `map(raw, 1023, 300, ...)` is uncalibrated magic numbers), the median filter for spike rejection, the exponential moving average and its one-line implementation, and the distinction between accuracy, precision and resolution.

### 4.10 PCB and manufacturing

Door 5 says a PCB is "ডিজাইনের চূড়ান্ত উত্তর" and stops. For a book that ends with a deployed device: trace width vs current, why a ground plane, 2-layer vs 4-layer, via basics, the KiCad schematic→layout→gerber→fab flow, and design-for-assembly. An appendix is enough.

### 4.11 Counterfeit and sourcing

Rafiq's component shop is the perfect setting for something no Western textbook covers and every Bangladeshi maker needs: fake FTDI chips, relabelled MOSFETs, capacitors that aren't the marked value, how to spot them, and why the cheapest drawer isn't. Half a page in Door 2, and it's material genuinely specific to this book.

### 4.12 Apparatus the book needs to be usable as a course

- **Per-door lab exercise with a BOM.** Right now the reader watches a device get built but is never told "now do this."
- **A starter-kit shopping list** costed in taka, sourced from the kind of shop the book is set in.
- **More assessment.** One recall question per door = 16 questions for an entire book. 3–5 per door, plus a capstone rubric.
- **A Bengali↔English glossary.** The book coins good Bengali terms (দরওয়ান for GPIO, ওয়াক্ত for timer intervals, কাগজাঘর for flash). A glossary makes them a vocabulary rather than local metaphors, and helps readers move to English datasheets — which the book correctly insists they must.
- **A troubleshooting appendix**: symptom → likely cause → measurement, built from the sixteen "ব্যর্থতা আগে" stories already in the text.

---

## PART 5 — Suggested order of work

**Stage 1 — correctness** (nothing here is cosmetic; a reader typing this in gets wrong results)
1. The six code/arithmetic errors in §1.2
2. The ASCII rule for part numbers, registers, hex — global find-and-replace
3. Verse-reference mismatches, the Door 9/12 cross-reference, the buck/LDO contradiction
4. Bengali typos and transliteration consistency

**Stage 2 — the AVR/ESP32 seam** (§1.1, option A) plus the Door 16 capstone rewrite, plus Door 16's missing failure callout

**Stage 3 — visuals**
5. The three global SVG fixes (`<defs>`, `.lbl-left`, remove orphans) — small change, book-wide effect
6. Build the symbol library
7. Redraw Tier 1's twelve schematics, then Tier 2's waveforms
8. Mechanical pass on the rest; swap the five mismatched photos

**Stage 4 — the build thread** (§2.1): requirements-notebook table in Door 1, ticked in Door 16; resolve the temperature sensor; recompute the battery figures once and propagate

**Stage 5 — new content**, in value order: soldering · Thévenin/loading · mains + Li-ion safety · AC/RMS · op-amp conditioning · state machines + `millis()` rollover · IP layer under MQTT · grounding/EMC · calibration and filtering · PCB appendix · counterfeit parts

**Stage 6 — apparatus**: per-door labs, glossary, troubleshooting appendix, expanded assessment

Stages 1–3 make the existing book correct. Stages 4–6 make it complete.

---

*Sources consulted for the ESP32 verification in §1.2: [Random Nerd Tutorials — Migrating from 2.x to 3.0](https://randomnerdtutorials.com/esp32-migrating-version-2-to-3-arduino/), [espressif/arduino-esp32 #9336](https://github.com/espressif/arduino-esp32/issues/9336), [ESP32 Forum — ADC2/WiFi conflict](https://www.esp32.com/viewtopic.php?t=7644), [ESP32 ADC behaviour](https://www.universal-solder.ca/troubleshooting-adc-inputs/). AVR figures (ADPS prescaler tables, Timer0/Timer1 modes, ADC 50–200 kHz requirement) are from the ATmega328P datasheet.*
