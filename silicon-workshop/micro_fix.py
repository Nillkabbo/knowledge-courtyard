#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 4 micro-fixes for diagram overlaps/clips.

c14 = open('doors-1-4.js').read()
old = '<text class="lbl-sm" x="322" y="92" font-size="9">ΔV রিপল</text>'
new = '<text class="lbl-sm" x="345" y="86" font-size="9">ΔV রিপল</text>'
assert old in c14, 'D3 dV'
c14 = c14.replace(old, new)
open('doors-1-4.js', 'w').write(c14)
print('D3 fixed')

c912 = open('doors-9-12.js').read()
old = '<text class="lbl-sm" x="290" y="232" font-size="10">উঁচু-অংশ = পুরো-শক্তি চালু; গড় শক্তি ≈ duty% — LED/মোটর গড়টাই অনুভব করে</text>'
new = '<text class="lbl-sm" x="290" y="237" font-size="9">উঁচু = পুরো-শক্তি; গড় ≈ duty% — LED/মোটর গড়টাই অনুভব করে</text>'
assert old in c912, 'D12 note'
c912 = c912.replace(old, new)
open('doors-9-12.js', 'w').write(c912)
print('D12 fixed')

c1316 = open('doors-13-16.js').read()
old = '<text class="lbl-sm" x="280" y="172" font-size="10">বোর্ড-নকশায় ডিবাগ-দরজা রেখো: চার-প্যাড (৩.৩V·GND·SWDIO·SWCLK) কোণে — ফিল্ড-মেরামতের নাড়ি-পরীক্ষার জায়গা</text>'
new = '<text class="lbl-sm" x="280" y="172" font-size="9">নকশায় ডিবাগ-দরজা রেখো: চার-প্যাড কোণে — ফিল্ড-মেরামতের নাড়ির জায়গা</text>'
assert old in c1316, 'D14 clip'
c1316 = c1316.replace(old, new)
old2 = '<text class="lbl-sm" x="420" y="158" font-size="10">খরচ-কলাম — বাজেটের খাতা</text>'
new2 = '<text class="lbl-sm" x="420" y="150" font-size="10">খরচ-কলাম — বাজেটের খাতা</text>'
if old2 in c1316:
    c1316 = c1316.replace(old2, new2)
    print('D16 খরচ raised')
open('doors-13-16.js', 'w').write(c1316)
print('D14 fixed')
