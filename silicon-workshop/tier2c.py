#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Tier 2c: THREE NEW waveform figures (I2C transaction, ADC staircase, rectifier ripple)
# Insert as 4th diagram in doors 13, 12, 3 respectively (before verse), using figtool-style splice.
import re

I2C_FIG = '''
<div class="diagram">
<div class="diag-title">নতুন — I2C লেনদেন: START→ঠিকানা→ACK→ডেটা→STOP (SDA/SCL দুই-রেল)</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <text class="lbl-cyan" x="40" y="30" font-size="11">SCL (ঘড়ি)</text>
  <text class="lbl-hot" x="40" y="120" font-size="11">SDA (ডেটা)</text>
  <!-- SCL: 9 clock pulses between start and stop -->
  <path class="wire-cyan" d="M 100 44 L 120 44 L 120 60 L 135 60 L 135 44 L 150 44 L 150 60 L 165 60 L 165 44 L 180 44 L 180 60 L 195 60 L 195 44 L 210 44 L 210 60 L 225 60 L 225 44 L 240 44 L 240 60 L 255 60 L 255 44 L 270 44 L 270 60 L 285 60 L 285 44 L 300 44 L 300 60 L 315 60 L 315 44 L 330 44 L 330 60 L 345 60 L 345 44 L 360 44 L 360 60 L 375 60 L 375 44 L 390 44 L 390 60 L 405 60 L 405 44 L 500 44" fill="none"/>
  <!-- SDA: start falling while SCL high, addr bits, ACK pull, data, stop -->
  <path class="wire-hot" d="M 100 134 L 118 134 L 118 158 L 150 158 L 150 134 L 165 134 L 165 158 L 180 158 L 180 134 L 195 134 L 195 158 L 210 158 L 210 134 L 240 134 L 240 146 L 270 146 L 270 134 L 285 134 L 285 158 L 300 158 L 300 134 L 315 134 L 315 158 L 330 158 L 330 134 L 345 134 L 345 158 L 360 158 L 360 134 L 430 134 L 430 150 L 500 150" fill="none"/>
  <!-- annotations -->
  <line class="grid-line" x1="118" y1="20" x2="118" y2="170" stroke-dasharray="2,4"/>
  <text class="lbl-sm" x="112" y="16" font-size="9">START</text>
  <text class="lbl" x="215" y="95" font-size="10">ঠিকানা 7-বিট + R/W̄</text>
  <rect class="cell" x="210" y="140" width="34" height="18" fill="none"/>
  <text class="lbl-sm" x="228" y="185" font-size="9">ACK (দাস টানে)</text>
  <line class="grid-line" x1="430" y1="20" x2="430" y2="170" stroke-dasharray="2,4"/>
  <text class="lbl-sm" x="422" y="16" font-size="9">STOP</text>
  <text class="lbl-sm" x="310" y="95" font-size="10">ডেটা-বাইট</text>
  <rect class="cell" x="60" y="205" width="440" height="30"/>
  <text class="lbl-sm" x="280" y="224" font-size="10">নিয়ম: SCL-হাই-থাকা অবস্থায় SDA-পতন = START, SDA-উত্থান = STOP; বিট-বদল শুধু SCL-লো-তে</text>
</svg>
<div class="diag-cap">I2C-এর হৃদয় এক চিত্রে: দুই তার, নয় ঘড়ি-পালস, ঠিকানা-পরে-স্বীকৃতি — দাসের ACK-টান (SDA নিচে) মাস্টারকে জানায় 'পেয়েছি'।</div>
</div>
'''

ADC_FIG = '''
<div class="diagram">
<div class="diag-title">নতুন — ADC-সিঁড়ি: ধারাবাহিক বিশ্বকে ধাপে ধাপে ভাগ (quantisation)</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <line class="axis" x1="60" y1="30" x2="60" y2="200"/>
  <line class="axis" x1="60" y1="200" x2="520" y2="200"/>
  <text class="lbl-sm" x="30" y="36" font-size="10">V</text>
  <text class="lbl-sm" x="512" y="218" font-size="10">সময়→</text>
  <!-- staircase: 8 steps -->
  <path class="wire" d="M 60 195 L 110 195 L 110 172 L 160 172 L 160 149 L 210 149 L 210 126 L 260 126 L 260 103 L 310 103 L 310 80 L 360 80 L 360 57 L 410 57 L 410 40 L 470 40" fill="none"/>
  <!-- true analog ramp behind -->
  <path class="grid-line" d="M 60 195 Q 270 90 470 40" fill="none" stroke-dasharray="4,4"/>
  <!-- step labels -->
  <text class="lbl-sm" x="85" y="215" font-size="9">০</text>
  <text class="lbl-sm" x="135" y="215" font-size="9">১</text>
  <text class="lbl-sm" x="185" y="215" font-size="9">২</text>
  <text class="lbl-sm" x="235" y="215" font-size="9">৩</text>
  <text class="lbl-sm" x="285" y="215" font-size="9">৪</text>
  <text class="lbl-sm" x="335" y="215" font-size="9">৫</text>
  <text class="lbl-sm" x="385" y="215" font-size="9">৬</text>
  <text class="lbl-sm" x="435" y="215" font-size="9">৭</text>
  <text class="lbl-cyan" x="470" y="60" font-size="10">৩-বিট = ৮ ধাপ</text>
  <text class="lbl-sm" x="330" y="180" font-size="10">ভাঙা-রেখা = সত্য সংকেত (অ্যানালগ)</text>
  <rect class="cell" x="60" y="228" width="440" height="16" visibility="hidden"/>
  <text class="lbl-sm" x="290" y="240" font-size="10">১০-বিট ADC = ১০২৪ ধাপ; ধাপ-উচ্চতা = ভোল্টেজ-রেজোলিউশন (৩.৩V-রেফে ৩.২২mV)</text>
</svg>
<div class="diag-cap">ADC মানে সিঁড়ি-বানানো: মসৃণ দুনিয়াকে নির্দিষ্ট ধাপে ভাগ করা — ধাপ যত বেশি (বিট যত বেশি), ছবি তত মসৃণ; ভুলটাও ধাপের ভেতরেই লুকিয়ে (quantisation error)।</div>
</div>
'''

RIPPLE_FIG = '''
<div class="diagram">
<div class="diag-title">নতুন — রিপল: ক্যাপের আগে-পরে (ব্রিজ-রেক্টিফায়ারের ফল)</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <line class="axis" x1="50" y1="25" x2="50" y2="220"/>
  <line class="axis" x1="50" y1="110" x2="530" y2="110"/>
  <text class="lbl-sm" x="20" y="30" font-size="9">+V</text>
  <text class="lbl-sm" x="24" y="114" font-size="9">০</text>
  <!-- AC input sine (2 cycles), before cap -->
  <path class="grid-line" d="M 60 110 Q 95 40 130 110 Q 165 180 200 110 Q 235 40 270 110" fill="none" stroke-dasharray="3,4"/>
  <text class="lbl-sm" x="165" y="30" font-size="10">AC ইনপুট (ক্যাপের আগে)</text>
  <!-- rectified humps -->
  <path class="wire-hot" d="M 290 110 Q 325 40 360 110 Q 395 40 430 110" fill="none"/>
  <text class="lbl-sm" x="360" y="95" font-size="9">রেক্টিফায়েড (সব-ঢেউ ওপরে)</text>
  <!-- with cap: flat with ripple -->
  <path class="wire-cyan" d="M 290 52 L 318 52 L 325 66 Q 345 52 360 52 L 388 52 L 395 66 Q 415 52 430 52 L 520 52" fill="none"/>
  <text class="lbl-cyan" x="470" y="40" font-size="10">ক্যাপ-সহ</text>
  <line class="grid-line" x1="318" y1="52" x2="318" y2="80" stroke-dasharray="2,3"/>
  <line class="grid-line" x1="325" y1="66" x2="325" y2="80" stroke-dasharray="2,3"/>
  <text class="lbl-sm" x="322" y="92" font-size="9">ΔV রিপল</text>
  <rect class="cell" x="60" y="196" width="440" height="40"/>
  <text class="lbl-sm" x="280" y="212" font-size="10">রিপল-সূত্র: ΔV ≈ I × t ÷ C — বেশি কারেন্ট বা কম ক্যাপ = বেশি দোলা</text>
  <text class="lbl-sm" x="280" y="228" font-size="10">ক্যাপের ভোল্টেজ-রেটিং ≥ পিক (২২০V RMS-এর পিক ৩১১V!) — RMS-পাঠ দরজার কাজে লাগবে</text>
</svg>
<div class="diag-cap">তিন স্তরের একই সংকেত: AC-দোলা → ওপরে-তোলা ঢেউ → ক্যাপে প্রায়-সমতল (ছোট ΔV-রিপল বাকি) — চার্জারের ভেতরের তিন-অঙ্কের নাটক।</div>
</div>
'''

def insert_before_verse(src, num, fig):
    m = list(re.finditer(r'num:' + str(num) + r',[\\s\\S]*?'.replace('\\\\','\\') + r'(<div class="verse">)', src))
    # simpler regex
    import re as _re
    m = _re.search(r'(num:' + str(num) + r',[\\s\\S]*?)(<div class="verse">)'.replace('\\\\','\\'), src)
    assert m, f"door {num} verse missing"
    i = m.start(2)
    return src[:i] + fig + '\n' + src[i:]

c3 = open('doors-1-4.js').read()
c3 = insert_before_verse(c3, 3, RIPPLE_FIG)
open('doors-1-4.js', 'w').write(c3)

c912 = open('doors-9-12.js').read()
c912 = insert_before_verse(c912, 12, ADC_FIG)
open('doors-9-12.js', 'w').write(c912)

c1316 = open('doors-13-16.js').read()
c1316 = insert_before_verse(c1316, 13, I2C_FIG)
open('doors-13-16.js', 'w').write(c1316)
print('3 new Tier-2 figures inserted: D3 ripple, D12 ADC staircase, D13 I2C transaction')
