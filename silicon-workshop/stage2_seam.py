#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Stage 2: AVR/ESP32 two-chip seam (Option A). Structure-preserving.
import re

# Door 8: Farhan two-chip paragraph
c58 = open('doors-5-8.js').read()
tail8 = 'দুই ডলারের শহর, রেডিওসহ।"</div>'
new_tail8 = 'দুই ডলারের শহর, রেডিওসহ।" তারপর তিনি টেবিলের ড্রয়ার থেকে বের করলেন আরেকটা বোর্ড — পুরনো, চেনা Arduino Uno। "আর এই দানাটা রাখো আলাদা করে চিনে: ATmega328P। আমাদের কারিগরখানায় এখন দুই চিপ, দুই পোশাকে। <strong>Uno = স্বচ্ছ চিপ</strong> — এর রেজিস্টারগুলো এত সরল যে ভেতরটা চোখে দেখা যায়; তোমার হাতে-শেখার টেবিলে ওটাই থাকবে। <strong>ESP32 = মাঠের চিপ</strong> — যেটা আমাদের প্রজেক্টে যাবে, রেডিও-দপ্তর নিয়ে। এগিয়ে যেতে যেতে দেখবে: একই কাজ দুই চিপে দুই ভাষায় লেখা হয় — স্বচ্ছ চিপে সরাসরি রেজিস্টারে চিঠি, মাঠের চিপে লাইব্রেরির মোড়কে। <em>কৌশলটা একই থাকে — পোশাক বদলায়।</em> যে দুই-ই পড়তে জানে, সে-ই যেকোনো তৃতীয় চিপে ডেটাশিট খুলে বসতে পারে।"</div>'
assert tail8 in c58, 'D8 tail not found'
c58 = c58.replace(tail8, new_tail8, 1)
open('doors-5-8.js', 'w').write(c58)
print('D8: two-chip paragraph woven in')

# Doors 9-12: ESP32-equivalent boxes inside code-blocks
c912 = open('doors-9-12.js').read()
BOXES = {
9: '''

  ── অন্য চিপে (ESP32-তে একই কাজ) ──────────
  রেজিস্টার-চিঠির বদলে লাইব্রেরি-মোড়ক:
    gpio_set_direction(GPIO_NUM_5, GPIO_MODE_OUTPUT);
    gpio_set_level(GPIO_NUM_5, 1);   // "জ্বলো"
  (Arduino-ESP32 স্তরে: pinMode/digitalWrite)
  পোশাক বদলায়, কৌশল একই: পিন = ঠিকানা,
  দিক ঠিক করো → মান লেখো।''',
10: '''

  ── অন্য চিপে (ESP32-তে একই কাজ) ──────────
  gpio_set_intr_type(GPIO_NUM_2, GPIO_NEGEDGE);
  gpio_isr_handler_add(GPIO_NUM_2, onRain, NULL);
  // ISR-এ IRAM_ATTR বাধ্য — ঘুমের ক্যাশ-ফাঁদ এড়াতে
  একই তিন-নিয়ম: ছোট ISR · delay নিষেধ ·
  শেয়ারে volatile — পোশাক বদলায়, শৃঙ্খলা এক।''',
11: '''

  ── অন্য চিপে (ESP32-তে একই কাজ) ──────────
  esp_timer_start_periodic(h, 15*1000000ULL);
  // ৬৪-বিট μs-টাইমার; ঘুমেও চলে (RTC-টাইমার আলাদা)
  হিসাব-সূত্র অপরিবর্তিত: সময় × টিক-হার;
  বড় চিপে বড় গণতাকারী মানে শুধু পাল্লা বদল।''',
12: '''

  ── অন্য চিপে (ESP32-তে একই কাজ) ──────────
  adc_oneshot_read(h, ADC_CHANNEL_0, &raw);
  // ১২-বিট: ০…৪০৯৫; attenuation দিয়ে পাল্লা বাছো
  PWM: ledcSetup/ledcWrite (LEDC-চ্যানেল)
  সতর্ক: ADC২-গুচ্ছ WiFi চলাকালে ব্যস্ত —
  সেন্সর ADC১-এ: বেঞ্চে ভালো, মাঠে ফাঁদ!''',
}
for d, box in BOXES.items():
    m = list(re.finditer(r'num:' + str(d) + r',[\\s\\S]*?<div class="code-block">([\\s\\S]*?)</div>', c912))
    assert m, 'D%d code-block missing' % d
    cb = m[0]
    c912 = c912[:cb.start(1)] + cb.group(1) + box + c912[cb.end(1):]
open('doors-9-12.js', 'w').write(c912)
print('D9-12: ESP32 boxes appended')

# Door 14: build-note SWD -> JTAG (teaching keeps SWD as ARM standard)
c1316 = open('doors-13-16.js').read()
old14 = '<strong>নিয়ম-স্থাপন:</strong> SWD-প্যাড বোর্ডে + প্রথম-বুট-লগ'
new14 = '<strong>নিয়ম-স্থাপন:</strong> JTAG-প্যাড বোর্ডে (ESP32-র ডিবাগ-দরজা JTAG — SWD নয়; ARM-এর SWD-গল্প ওপরেই শেখা) + প্রথম-বুট-লগ'
assert old14 in c1316, 'D14 build note not found'
c1316 = c1316.replace(old14, new14)
open('doors-13-16.js', 'w').write(c1316)
print('D14: JTAG corrected')
