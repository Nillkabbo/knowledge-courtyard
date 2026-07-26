doors.push({
  num: 6,
  icon: "📖",
  color: "#0ea5e9",
  name: "গোপন ডায়েরি",
  subtitle: "The Secret Diary",
  tech: "Change Data Capture (CDC) — Debezium, binlog, WAL, log-based replication, Kafka Connect",
  spirit: "সিজিল — অভিলেখ, প্রতিটি পরিবর্তনের দলিল",
  secret: "CDC = প্রতিটি INSERT/UPDATE/DELETE real-time ধরা। MySQL binlog বা PostgreSQL WAL পড়ো। প্রতিটি পরিবর্তন একটি event। Debezium এটা স্বয়ংক্রিয় করে — OLTP থেকে OLAP-এ সরাসরি।",
  recall: {
    q: " CDC কী? binlog কী? Debezium কীভাবে কাজ করে?",
    qen: "What is CDC? What is binlog? How does Debezium work?",
    a: "CDC = Change Data Capture — প্রতিটি row change event হিসেবে। binlog = MySQL-এর transaction log। Debezium = binlog পড়ে → Kafka-তে event পাঠায়।",
    aen: "CDC = Change Data Capture — each row change as event. binlog = MySQL transaction log. Debezium reads binlog → sends events to Kafka."
  },
  story: `<p class="scene-setting">খালিদ (Door ৫) তোমাকে shuffle শিখিয়েছেন। কিন্তু একটি সমস্যা — OLTP থেকে OLAP-এ ডেটা কীভাবে সরাবে? প্রতিদিন রাতে batch? কিন্তু তাহলে real-time থাকে না। CDC এর উত্তর — প্রতিটি INSERT/UPDATE/DELETE সঙ্গে সঙ্গে ধরো। MySQL binlog পড়ে — সেখানে প্রতিটি পরিবর্তন লেখা আছে। Debezium সেটা স্বয়ংক্রিয় করে।</p>
<p class="scene-setting en">Khalid (Door 5) taught you shuffle. But a problem — how to move data from OLTP to OLAP? Nightly batch? Then it's not real-time. CDC answers — catch every INSERT/UPDATE/DELETE instantly. Read MySQL binlog — every change is recorded there. Debezium automates this.</p>

<div class="dialogue"><strong>ডায়েরি-লেখক ইউসুফ:</strong> MySQL-এ প্রতিটি transaction binlog-এ লেখা হয় — row-level। INSERT: {id:42, amount:500}। UPDATE: {before:{amount:500}, after:{amount:1000}}। DELETE: {id:42}। Debezium এই binlog পড়ে Kafka topic-এ পাঠায়। OLAP সেই topic পড়ে নিজের table-এ apply করে। real-time replication — কোনো batch নেই!</div>
<div class="dialogue en"><strong>Diary Writer Yusuf:</strong> MySQL writes every transaction to binlog — row-level. INSERT: {id:42, amount:500}. UPDATE: {before:{amount:500}, after:{amount:1000}}. DELETE: {id:42}. Debezium reads this binlog and sends to Kafka topic. OLAP reads that topic and applies to its own table. Real-time replication — no batch!</div>

<div class="code-block">— CDC with Debezium + Kafka —

  # MySQL my.cnf — binlog enable:
  [mysqld]
  server-id = 1
  log_bin = mysql-bin
  binlog_format = ROW           # row-level changes
  binlog_row_image = FULL       # before + after

  # Debezium Kafka Connect config (POST):
  {
    "name": "mysql-source",
    "config": {
      "connector.class": "io.debezium.
        connector.mysql.MySqlConnector",
      "database.hostname": "mysql.ledgerpilot.com",
      "database.user": "debezium",
      "database.server.id": "184054",
      "database.server.name": "ledgerpilot",
      "database.include.list": "ledger",
      "table.include.list": "ledger.transactions",
      "database.history.kafka.topic": "schema-changes",
      "database.history.kafka.bootstrap.servers": "kafka:9092"
    }
  }

  # Kafka topic: ledgerpilot.ledger.transactions
  # Event example:
  {
    "op": "u",            // update
    "before": {"amount": 500},
    "after": {"amount": 1000, "updated_at": "2026-07-26"},
    "source": {"db": "ledger", "table": "transactions"}
  }

  -- OLAP side: consume করে apply করো —
  -- real-time, no batch! —</div>

<div class="callout info"><span class="co-icon">📖</span><div><strong>CDC methods:</strong><br>
<strong>Log-based (best):</strong> binlog/WAL পড়ো — zero impact on source<br>
<strong>Query-based:</strong> SELECT MAX(updated_at) — polling, ধীর<br>
<strong>Trigger-based:</strong> DB trigger — performance impact<br>
<strong>Debezium:</strong> log-based CDC for MySQL, PostgreSQL, MongoDB<br>
<strong>WAL:</strong> PostgreSQL Write-Ahead Log — same concept</div></div>

<div class="verse">إِنَّا نَحْنُ نُزِّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আমরাই এই স্মারক নাজিল করেছি এবং আমরাই এর রক্ষক।" — কুরআন ১৫:৯</div>

<p class="scene-setting">সিজিল — অভিলেখ। binlog সেই অভিলেখের রূপ — প্রতিটি পরিবর্তনের দলিল। কিছুই হারিয়ে যায় না — সব লেখা আছে। CDC সেই অভিলেখ পড়ে — real-time প্রবাহ। যেমন কুরআন সংরক্ষিত — binlog-ও প্রতিটি transaction সংরক্ষিত।</p>
<p class="scene-setting en">Sijjil — record. binlog is the form of that record — document of every change. Nothing is lost — everything written. CDC reads that record — real-time flow. As the Quran is preserved — binlog preserves every transaction.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৯ (Databases) Door ৫ (Replication):</strong> master-slave replication ও WAL। Book ৪৪ Door ৭: Kafka = CDC events-এর পাইপলাইন।</div></div>

<div class="secret-box">📖 <strong>CDC = প্রতিটি পরিবর্তন real-time। binlog পড়ো।</strong> কিন্তু events কোথায় যাবে? কে ধরে রাখবে? সেই নদী — Kafka। পরের দরজায়।</div>`,
  senior: {
    title: "CDC এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">CDC</td><td>Change Data Capture</td></tr>
<tr><td class="hl">binlog</td><td>MySQL transaction log (row-level)</td></tr>
<tr><td class="hl">WAL</td><td>PostgreSQL Write-Ahead Log</td></tr>
<tr><td class="hl">Debezium</td><td>Open-source log-based CDC</td></tr>
<tr><td class="hl">Kafka Connect</td><td>CDC → Kafka pipeline</td></tr>
<tr><td class="hl">Event</td><td>{op, before, after, source}</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "🌊",
  color: "#0ea5e9",
  name: "বহমান নদী",
  subtitle: "The Flowing River",
  tech: "Apache Kafka — LinkedIn 2011, pub/sub, partitions, consumer groups, exactly-once, event streaming",
  spirit: "নাহর — নদী, অবিরত প্রবাহমান ডেটা",
  secret: "Kafka = distributed event log। Producer লেখে, Consumer পড়ে। Partition-এ ভাগ, consumer group-এ সমান ভাগ। events দিন সপ্তাহ ধরে থাকে — পুনরায় পড়া যায়।",
  recall: {
    q: " Kafka-তে partition ও consumer group কীভাবে কাজ করে?",
    qen: "How do partitions and consumer groups work in Kafka?",
    a: "Topic = partition-এ ভাগ। প্রতিটি partition একটি log। Consumer group: প্রতিটি partition-এ এক consumer — সমান ভাগ। কোনো consumer মারা গেলে rebalance।",
    aen: "Topic = divided into partitions. Each partition is a log. Consumer group: one consumer per partition — even distribution. If consumer dies, rebalance."
  },
  story: `<p class="scene-setting">ইউসুফ (Door ৬) তোমাকে CDC শিখিয়েছেন। কিন্তু events কোথায় যাবে? LinkedIn ২০১১ সালে একটি বিশাল নদী তৈরি করলো — Kafka। Producer এক প্রান্তে লেখে, Consumer অন্য প্রান্তে পড়ে। মাঝে বিশাল নদী — events দিন, সপ্তাহ, মাস ধরে থাকে। পুনরায় পড়া যায়। প্রতিটি partition আলাদা — সমান্তরাল প্রক্রিয়া।</p>
<p class="scene-setting en">Yusuf (Door 6) taught you CDC. But where do events go? LinkedIn in 2011 built a massive river — Kafka. Producer writes at one end, Consumer reads at the other. Between them a vast river — events persist for days, weeks, months. Can be re-read. Each partition separate — parallel processing.</p>

<div class="dialogue"><strong>নদী-নিয়ন্ত্রক মুসা:</strong> Kafka-তে topic ভাগ হয় partition-এ। প্রতিটি partition একটি append-only log। একটি message লেখা হলে — একটি offset পায়। Consumer সেই offset থেকে পড়ে। Consumer group: ৪টি partition, ৪টি consumer — প্রতিটিতে একটি। কেউ মারা গেলে বাকিরা তার partition নেয়। এটাই rebalance। Exactly-once: transactional — কোনো message দুবার নয়।</div>
<div class="dialogue en"><strong>River Controller Musa:</strong> In Kafka, topics divide into partitions. Each partition is an append-only log. A message gets an offset when written. Consumer reads from that offset. Consumer group: 4 partitions, 4 consumers — one each. If one dies, others take its partition. This is rebalance. Exactly-once: transactional — no message twice.</div>

<div class="code-block">— Kafka CLI দেখো —

  # Topic তৈরি
  $ kafka-topics --create \\
      --topic transactions \\
      --partitions 4 \\
      --replication-factor 3 \\
      --bootstrap-server kafka:9092

  # Producer — message লেখো
  $ kafka-console-producer \\
      --topic transactions \\
      --bootstrap-server kafka:9092
  > {"user_id": 42, "amount": 500, "type": "credit"}
  > {"user_id": 17, "amount": 200, "type": "debit"}

  # Consumer — message পড়ো
  $ kafka-console-consumer \\
      --topic transactions \\
      --from-beginning \\
      --group analytics \\
      --bootstrap-server kafka:9092
  {"user_id": 42, "amount": 500, "type": "credit"}
  {"user_id": 17, "amount": 200, "type": "debit"}

  # Python producer:
  from kafka import KafkaProducer
  import json
  producer = KafkaProducer(
      bootstrap_servers=['kafka:9092'],
      value_serializer=lambda v: json.dumps(v).encode()
  )
  producer.send('transactions', {'user_id': 42, 'amount': 500})

  — Topic: ৪ partition · ৩ replica · infinite retention —</div>

<div class="callout info"><span class="co-icon">🌊</span><div><strong>Kafka উপাদান:</strong><br>
<strong>Topic:</strong> message এর বিভাগ (যেমন: transactions)<br>
<strong>Partition:</strong> topic-এর সমান্তরাল ভাগ<br>
<strong>Offset:</strong> partition-এ message-এর অবস্থান<br>
<strong>Consumer Group:</strong> partition সমান ভাগে পড়ে<br>
<strong>Retention:</strong> message কতদিন থাকবে (default: ৭ দিন)<br>
<strong>Exactly-Once:</strong> transactional — দুবার নয়</div></div>

<div class="verse">وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং আমরা পানি থেকে সব জীবিত কিছু সৃষ্টি করেছি।" — কুরআন ২১:৩০</div>

<p class="scene-setting">নাহর — নদী। Kafka সেই নদীর রূপ — অবিরত প্রবাহমান ডেটা। প্রতিটি event একটি জীবন্ত কণা — উৎস থেকে গন্তব্য পর্যন্ত। নদী থামে না — Kafka-ও থামে না। যত বেশি consumer, তত বেশি শাখা — কিন্তু মূল প্রবাহ অপরিবর্তিত।</p>
<p class="scene-setting en">Nahr — river. Kafka is the form of that river — continuously flowing data. Each event a living particle — from source to destination. The river doesn't stop — neither does Kafka. The more consumers, the more branches — but the main flow unchanged.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (Distributed Systems) Door ৫ (Consensus):</strong> Kafka replication = Raft-like consensus। Book ৪৪ Door ৬: CDC → Kafka event pipeline।</div></div>

<div class="secret-box">🌊 <strong>Kafka = distributed event log। partition · consumer group · exactly-once।</strong> কিন্তু events পড়ে কী করবে? Transform করে কোথায় লিখবে? সেই পাইপলাইন — dbt। পরের দরজায়।</div>`,
  senior: {
    title: "Apache Kafka এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">LinkedIn (2011)</td><td>Kafka creator</td></tr>
<tr><td class="hl">Topic</td><td>message বিভাগ</td></tr>
<tr><td class="hl">Partition</td><td>সমান্তরাল ভাগ</td></tr>
<tr><td class="hl">Consumer Group</td><td>সমান ভাগে পড়ে</td></tr>
<tr><td class="hl">Retention</td><td>message কতদিন থাকবে</td></tr>
<tr><td class="hl">Exactly-Once</td><td>transactional delivery</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "🏭",
  color: "#0ea5e9",
  name: "অ্যাসেম্বলি লাইন",
  subtitle: "The Assembly Line",
  tech: "dbt (data build tool) — ELT, Jinja templates, ref(), tests, models, incremental, materializations",
  spirit: "তাদবির — ব্যবস্থা, raw ডেটাকে ক্রমে সাজানো",
  secret: "dbt = SQL-এ transformation লেখো। ref() দিয়ে model সংযোগ। Jinja template দিয়া পুনরায় ব্যবহার। test দিয়ে ডেটা গুণমান যাচাই। ELT: Extract → Load → Transform (warehouse-এই)।",
  recall: {
    q: " dbt কী? ELT ও ETL-এর পার্থক্য?",
    qen: "What is dbt? What is the difference between ELT and ETL?",
    a: "dbt = data build tool — SQL-এ transformation। ELT: Load আগে, Transform warehouse-এ। ETL: Transform loading-এর আগেই (বাইরে)। dbt = ELT।",
    aen: "dbt = data build tool — transformation in SQL. ELT: Load first, Transform in warehouse. ETL: Transform before loading (external). dbt = ELT."
  },
  story: `<p class="scene-setting">মুসা (Door ৭) তোমাকে Kafka শিখিয়েছেন। কিন্তু events পড়ে কী করবে? Raw ডেটা থেকে analytics-ready ডেটা। এটাই transformation। dbt (data build tool) সেই কাজ করে — SQL-এ। raw_transactions → clean → join → aggregate → final_report। প্রতিটি ধাপ একটি model। ref() দিয়ে সংযুক্ত।</p>
<p class="scene-setting en">Musa (Door 7) taught you Kafka. But what to do with events? From raw data to analytics-ready data. This is transformation. dbt (data build tool) does this — in SQL. raw_transactions → clean → join → aggregate → final_report. Each step a model. Connected with ref().</p>

<div class="dialogue"><strong>অ্যাসেম্বলি-স্থপতি হুদা:</strong> dbt-তে তুমি SQL লেখো — Jinja template দিয়ে। প্রতিটি model একটি SQL file। ref() দিয়ে এক model অন্যটিকে ডাকে। dbt DAG তৈরি করে — কোনটা আগে, কোনটা পরে। dbt run সব model execute করে ক্রমানুসারে। dbt test ডেটা গুণমান যাচাই করে — not_null, unique, accepted_values। Incremental: শুধু নতুন row প্রক্রিয়া করো।</div>
<div class="dialogue en"><strong>Assembly Architect Huda:</strong> In dbt you write SQL — with Jinja templates. Each model is a SQL file. ref() connects one model to another. dbt builds a DAG — which first, which later. dbt run executes all models in order. dbt test validates data quality — not_null, unique, accepted_values. Incremental: process only new rows.</div>

<div class="code-block">— dbt: SQL Transformation —

  -- models/stg_transactions.sql (staging)
  SELECT
      transaction_id,
      user_id,
      amount::DECIMAL(10,2) AS amount,
      CAST(created_at AS TIMESTAMP) AS created_at
  FROM {{ ref('raw_transactions') }}

  -- models/int_user_spending.sql (intermediate)
  SELECT
      user_id,
      DATE_TRUNC('month', created_at) AS month,
      SUM(amount) AS total_spent,
      COUNT(*) AS transaction_count
  FROM {{ ref('stg_transactions') }}
  GROUP BY user_id, month

  -- models/marts/user_summary.sql (final)
  SELECT
      u.name,
      u.city,
      s.total_spent,
      s.transaction_count,
      s.total_spent / s.transaction_count AS avg_transaction
  FROM {{ ref('int_user_spending') }} s
  JOIN {{ ref('dim_users') }} u USING (user_id)

  -- dbt commands:
  $ dbt run                 # সব model execute
  $ dbt run --select user_summary  # শুধু একটি
  $ dbt test               # data quality check
  $ dbt build              # run + test একসাথে</div>

<div class="callout info"><span class="co-icon">🏭</span><div><strong>dbt concepts:</strong><br>
<strong>Model:</strong> একটি SQL file — একটি transformation<br>
<strong>ref():</strong> অন্য model কে ডাকো — DAG তৈরি করে<br>
<strong>Materialization:</strong> table, view, incremental, ephemeral<br>
<strong>Test:</strong> not_null, unique, accepted_values, relationships<br>
<strong>Jinja:</strong> loop, conditional, macro — SQL-এ প্রোগ্রামিং<br>
<strong>ELT vs ETL:</strong> ELT = warehouse-এই transform (modern)</div></div>

<div class="verse">وَكُلَّ شَيْءٍ فَصَّلْنَاهُ تَفْصِيلًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং প্রতিটি কিছু আমরা বিস্তারিত বর্ণনা করেছি।" — কুরআন ১৭:১২</div>

<p class="scene-setting">তাদবির — ব্যবস্থা। dbt সেই ব্যবস্থার রূপ — raw ডেটাকে ক্রমে সাজানো। প্রতিটি model একটি ধাপ, ref() দিয়ে সংযুক্ত। DAG-এর শৃঙ্খলে — staging → intermediate → mart। বিশৃঙ্খল ডেটা থেকে সুশৃঙ্খল জ্ঞান।</p>
<p class="scene-setting en">Tadbir — arrangement. dbt is the form of that arrangement — organizing raw data step by step. Each model a step, connected by ref(). In the chain of DAG — staging → intermediate → mart. From chaotic data to orderly knowledge.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৭ (Testing-QA) Door ৯ (Contract):</strong> dbt test = data contract! Book ৪৪ Door ৪: Spark DAG ও dbt DAG — একই ধারণা।</div></div>

<div class="secret-box">🏭 <strong>dbt = SQL transformation, DAG, ref()।</strong> কিন্তু data warehouse-এ কেবল table নয় — এখন একটি নতুন প্যারাডাইম। Lakehouse — warehouse ও data lake একসাথে। পরের দরজায়।</div>`,
  senior: {
    title: "dbt এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">dbt</td><td>data build tool — SQL transformation</td></tr>
<tr><td class="hl">Model</td><td>একটি SQL file</td></tr>
<tr><td class="hl">ref()</td><td>model সংযোগ — DAG</td></tr>
<tr><td class="hl">Test</td><td>not_null, unique, relationships</td></tr>
<tr><td class="hl">Materialization</td><td>table/view/incremental</td></tr>
<tr><td class="hl">ELT</td><td>Load আগে, Transform warehouse-এ</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🏛️",
  color: "#0ea5e9",
  name: "হ্রদের ঘর",
  subtitle: "The Lakehouse",
  tech: "Lakehouse Architecture — Iceberg (Netflix 2017), Delta Lake (Databricks), Hudi, ACID on data lakes, time travel",
  spirit: "কাওসার — অফুরন্ত ঝরনা, সব ডেটার এক স্থান",
  secret: "Lakehouse = Data Lake + Data Warehouse। Iceberg/Delta: ACID transaction object storage-এ। Time travel: অতীতে ফেরা। Schema evolution: কলাম যোগ বিনা ঝামেলায়।",
  recall: {
    q: " Lakehouse কী? Iceberg/Delta Lake কী করে?",
    qen: "What is a Lakehouse? What do Iceberg/Delta Lake do?",
    a: "Lakehouse = lake + warehouse একসাথে। Iceberg/Delta: ACID transaction S3-এ। Time travel: অতীত version পড়ো। Schema evolution: কলাম যোগ বিনা disruption।",
    aen: "Lakehouse = lake + warehouse together. Iceberg/Delta: ACID transactions on S3. Time travel: read past versions. Schema evolution: add columns without disruption."
  },
  story: `<p class="scene-setting">হুদা (Door ৮) তোমাকে dbt শিখিয়েছেন। কিন্তু ডেটা কোথায় থাকে? Data Warehouse (Snowflake) — দামি। Data Lake (S3) — সস্তা কিন্তু ACID নেই। Lakehouse এর উত্তর — দুটো একসাথে! Iceberg (Netflix ২০১৭) ও Delta Lake (Databricks) — S3-তে ACID transaction। Time travel — অতীতে ফেরা। Schema evolution — বিনা ঝামেলায় পরিবর্তন।</p>
<p class="scene-setting en">Huda (Door 8) taught you dbt. But where does data live? Data Warehouse (Snowflake) — expensive. Data Lake (S3) — cheap but no ACID. Lakehouse answers — both together! Iceberg (Netflix 2017) and Delta Lake (Databricks) — ACID transactions on S3. Time travel — go back in time. Schema evolution — change without disruption.</p>

<div class="dialogue"><strong>হ্রদ-স্থপতি আদম:</strong> Iceberg table = S3-তে Parquet file + metadata layer। metadata বলে কোন file current, কোনটা deleted। এতে ACID হয় — commit হলে দৃশ্যমান, না হলে নয়। Time travel: SELECT * FROM table FOR VERSION AS OF '2026-01-01' — অতীতে ফেরা! Schema evolution: ALTER TABLE ADD COLUMN — পুরোনো data unaffected। Merge on read বা copy on write।</div>
<div class="dialogue en"><strong>Lake Architect Adam:</strong> Iceberg table = Parquet files on S3 + metadata layer. Metadata says which file is current, which deleted. This gives ACID — committed becomes visible, uncommitted doesn't. Time travel: SELECT FOR VERSION AS OF past date! Schema evolution: ALTER TABLE ADD COLUMN — old data unaffected. Merge on read or copy on write.</div>

<div class="code-block">— Iceberg / Delta Lake SQL —

  -- Iceberg table তৈরি (Spark + Iceberg):
  CREATE TABLE ledger.transactions (
      id BIGINT,
      user_id BIGINT,
      amount DECIMAL(10,2),
      created_at TIMESTAMP
  ) USING iceberg
  PARTITIONED BY (days(created_at));

  -- ACID transaction:
  INSERT INTO ledger.transactions
  VALUES (1, 42, 500.00, '2026-07-26');

  UPDATE ledger.transactions
  SET amount = 600.00 WHERE id = 1;

  DELETE FROM ledger.transactions
  WHERE created_at < '2026-01-01';

  -- Time Travel: অতীত version পড়ো!
  SELECT * FROM ledger.transactions
  FOR VERSION AS OF '2026-07-01';

  SELECT * FROM ledger.transactions.history;
  -- made_current_at  | snapshot_id
  -- 2026-07-26 10:00 | snap_001 (INSERT)
  -- 2026-07-26 11:00 | snap_002 (UPDATE)

  -- Schema Evolution:
  ALTER TABLE ledger.transactions
  ADD COLUMN currency STRING;
  -- পুরোনো row: currency = NULL (no problem!)

  -- Delta Lake (Databricks):
  -- FORMAT DELTA — same ACID + time travel
  --OPTIMIZE — small file compaction</div>

<div class="callout info"><span class="co-icon">🏛️</span><div><strong>Lakehouse table formats:</strong><br>
<strong>Iceberg (Netflix 2017):</strong> open, multi-engine (Spark, Flink, Trino)<br>
<strong>Delta Lake (Databricks):</strong> Spark-native, optimized<br>
<strong>Hudi (Uber 2016):</strong> upsert/delete focused<br>
<strong>ACID on S3:</strong> metadata layer = transaction log<br>
<strong>Time Travel:</strong> SELECT FOR VERSION AS OF<br>
<strong>Schema Evolution:</strong> add/remove column bina rebuild</div></div>

<div class="verse">فِيهَا عُيُونٌ تَجْرِي</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"সেখানে প্রবাহমান ঝরনা আছে।" — কুরআন ৮৮:১২</div>

<p class="scene-setting">কাওসার — অফুরন্ত ঝরনা। Lakehouse সেই ঝরনার রূপ — সব ডেটার এক স্থান। structured (warehouse) ও unstructured (lake) একসাথে। ঝরনা থামে না — ডেটাও থামে না। Time travel দিয়ে অতীত দেখো, schema evolution দিয়ে ভবিষ্যতে প্রস্তুত হও।</p>
<p class="scene-setting en">Kawthar — inexhaustible spring. Lakehouse is the form of that spring — one place for all data. Structured (warehouse) and unstructured (lake) together. The spring doesn't stop — neither does data. Time travel sees the past, schema evolution prepares for the future.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৯ (Databases) Door ৪ (ACID):</strong> ACID properties। Lakehouse = ACID on object storage! Book ৩৫ (Distributed) Door ৬: distributed transactions।</div></div>

<div class="secret-box">🏛️ <strong>Lakehouse = lake + warehouse। Iceberg/Delta। ACID on S3। Time travel।</strong> এখন নয়টি দরজা পেরিয়েছো — শেষ দরজায় সব মেলাও।</div>`,
  senior: {
    title: "Lakehouse এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Lakehouse</td><td>Lake + Warehouse একসাথে</td></tr>
<tr><td class="hl">Iceberg (Netflix)</td><td>Open table format — multi-engine</td></tr>
<tr><td class="hl">Delta (Databricks)</td><td>Spark-native ACID</td></tr>
<tr><td class="hl">Hudi (Uber)</td><td>Upsert/delete focused</td></tr>
<tr><td class="hl">Time Travel</td><td>অতীত version পড়ো</td></tr>
<tr><td class="hl">Schema Evolution</td><td>column যোগ বিনা rebuild</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🌟",
  color: "#0ea5e9",
  name: "স্থপতির দৃষ্টি",
  subtitle: "The Architect's Vision",
  tech: "Synthesis — OLTP→CDC→Kafka→Spark→dbt→Lakehouse, full data engineering pipeline, DuckDB full-stack demo",
  spirit: "হিকমাহ — প্রয়োগিক জ্ঞান, সব পর্যায়ের সমন্বয়",
  secret: "নয়টি দরজা, নয়জন শিক্ষক — একটি সম্পূর্ণ pipeline। OLTP → CDC → Kafka → Spark → dbt → Lakehouse। প্রতিটি transaction থেকে dashboard পর্যন্ত।",
  recall: {
    q: " একটি সম্পূর্ণ data pipeline-র ধাপ কী কী?",
    qen: "What are the stages of a complete data pipeline?",
    a: "OLTP (MySQL) → CDC (Debezium) → Kafka → Spark (transform) → dbt (model) → Lakehouse (Iceberg) → Dashboard (BI)। প্রতিটি transaction থেকে অন্তর্দৃষ্টি পর্যন্ত।",
    aen: "OLTP (MySQL) → CDC (Debezium) → Kafka → Spark (transform) → dbt (model) → Lakehouse (Iceberg) → Dashboard (BI). From each transaction to insight."
  },
  story: `<p class="scene-setting">তুমি নয়টি দরজা পেরিয়েছো। আব্বাস OLTP/OLAP, তালহা Parquet, আয়েশা Star Schema, জাইদ Spark, খালিদ Shuffle, ইউসুফ CDC, মুসা Kafka, হুদা dbt, আদম Lakehouse। এখন সব মেলাও — একটি সম্পূর্ণ pipeline। একটি transaction থেকে dashboard পর্যন্ত — পুরো যাত্রা।</p>
<p class="scene-setting en">You have passed nine doors. Abbas OLTP/OLAP, Talha Parquet, Ayesha Star Schema, Zaid Spark, Khalid Shuffle, Yusuf CDC, Musa Kafka, Huda dbt, Adam Lakehouse. Now combine them all — a complete pipeline. From one transaction to dashboard — the full journey.</p>

<div class="callout info"><span class="co-icon">🌟</span><div><strong>সম্পূর্ণ Data Pipeline — নয় দরজার সমন্বয়:</strong><br>
<strong>Door ১ — আব্বাস (OLTP/OLAP):</strong> MySQL transaction → analytical query<br>
<strong>Door ২ — তালহা (Parquet):</strong> columnar file — দ্রুত read<br>
<strong>Door ৩ — আয়েশা (Star Schema):</strong> fact + dimension<br>
<strong>Door ৪ — জাইদ (Spark):</strong> distributed processing<br>
<strong>Door ৫ — খালিদ (Shuffle):</strong> broadcast join, salting<br>
<strong>Door ৬ — ইউসুফ (CDC):</strong> binlog → real-time event<br>
<strong>Door ৭ — মুসা (Kafka):</strong> event river — partition, consumer<br>
<strong>Door ৮ — হুদা (dbt):</strong> SQL transformation DAG<br>
<strong>Door ৯ — আদম (Lakehouse):</strong> ACID on S3 + time travel</div></div>

<div class="code-block">— Full Pipeline: DuckDB demo (single machine) —

  -- DuckDB: সব একসাথে (local demo)!
  INSTALL parquet; LOAD parquet;

  -- Step 1: MySQL থেকে extract
  ATTACH 'mysql:user=reader password=xxx
          host=ledgerpilot.db database=ledger' AS mysql_db;

  -- Step 2: Parquet-এ লেখো (columnar)
  COPY (SELECT * FROM mysql_db.transactions)
  TO 'data/transactions.parquet' (FORMAT PARQUET);

  -- Step 3: Transform + Aggregate
  CREATE TABLE monthly_report AS
  SELECT
      DATE_TRUNC('month', created_at) AS month,
      category,
      COUNT(*) AS num_transactions,
      SUM(amount) AS total_amount,
      AVG(amount) AS avg_amount
  FROM read_parquet('data/transactions.parquet')
  WHERE created_at >= '2026-01-01'
  GROUP BY month, category
  ORDER BY total_amount DESC;

  -- Step 4: Result দেখো
  SELECT * FROM monthly_report LIMIT 10;

  -- Real production:
  -- MySQL → Debezium → Kafka → Spark → dbt → Iceberg → BI
  -- Local demo: DuckDB (সব এক ফাইলে!)</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">শিক্ষক</div></div>
<div class="stat-card"><div class="sc-num">৬০+</div><div class="sc-label">বছরের গবেষণা</div></div>
<div class="stat-card"><div class="sc-num">PB</div><div class="sc-label">petabyte scale</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">pipeline</div></div>
</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">নূর — আলো। Data engineering হলো সেই আলো যা raw ডেটাকে অন্তর্দৃষ্টিতে রূপান্তর করে। বাইরে থেকে একটি dashboard সহজ মনে হয় — কিন্তু ভেতরে নয়টি স্তর কাজ করছে। OLTP-তে transaction লেখা হয়, CDC সেটা ধরে, Kafka-তে পাঠায়, Spark transform করে, dbt model তৈরি করে, Lakehouse-এ সংরক্ষিত হয়, BI dashboard-এ দৃশ্যমান হয়। একটি transaction থেকে অন্তর্দৃষ্টি — পুরো যাত্রা।</p>
<p class="scene-setting en">Nur — light. Data engineering is the light that transforms raw data into insight. Outside, a dashboard seems simple — but inside, nine layers work. OLTP writes a transaction, CDC catches it, Kafka streams it, Spark transforms it, dbt models it, Lakehouse stores it, BI displays it. From transaction to insight — the full journey.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৩৯ (Databases) → SQL, indexing, ACID। Book ৩৫ (Distributed Systems) → Kafka, Spark, consensus। Book ৩৭ (Networks) → Kafka protocol। Book ৪৫ (Compilers) → Spark Catalyst = compiler।</div></div>

<div class="checklist">
<li>🌍 MySQL ও BigQuery একই query চালাও — গতি তুলনা করো</li>
<li>📦 Python দিয়া Parquet ফাইল বানাও</li>
<li>⭐ ৫টি table দিয়ে Star Schema ডিজাইন করো</li>
<li>⚡ PySpark local mode-এ একটি aggregation চালাও</li>
<li>📖 Debezium docs পড়ো — MySQL → Kafka setup</li>
<li>🌊 kafka-console-producer/consumer চালাও</li>
<li>🏭 dbt init করে একটি project বানাও</li>
<li>🏛️ DuckDB দিয়া একটি Parquet query করো</li>
<li>📖 "Designing Data-Intensive Applications" — Kleppmann পড়ো</li>
</div>

<div class="secret-box">🌟 <strong>Data Engineering = raw ডেটাকে অন্তর্দৃষ্টিতে রূপান্তর।</strong> নয়টি দরজা, নয়জন শিক্ষক, একটি pipeline। OLTP থেকে dashboard পর্যন্ত। প্রতিটি transaction একটি কাহিনী — CDC ধরে, Kafka বহন করে, Spark transform করে, dbt সাজায়, Lakehouse সংরক্ষণ করে। এখন তুমি জানো — শুধু কীভাবে নয়, কেন। কেন columnar। কেন lazy evaluation। কেন CDC real-time। কেন Kafka partition। কেন Star Schema। কেন Lakehouse। এটাই হিকমাহ — data engineering-এর প্রয়োগিক জ্ঞান।</div>`,
  senior: {
    title: "সম্পূর্ণ Data Engineering এক নজরে",
    body: `<table class="kv-table"><tr><th>স্তর</th><th>কী</th><th>দরজা</th></tr>
<tr><td class="hl">OLTP/OLAP</td><td>Row vs columnar</td><td>১</td></tr>
<tr><td class="hl">Parquet</td><td>Columnar file format</td><td>২</td></tr>
<tr><td class="hl">Star Schema</td><td>Fact + dimension</td><td>৩</td></tr>
<tr><td class="hl">Spark</td><td>Distributed processing</td><td>৪</td></tr>
<tr><td class="hl">Shuffle/Skew</td><td>Broadcast, salting</td><td>৫</td></tr>
<tr><td class="hl">CDC</td><td>binlog → event</td><td>৬</td></tr>
<tr><td class="hl">Kafka</td><td>Event streaming river</td><td>৭</td></tr>
<tr><td class="hl">dbt</td><td>SQL transformation DAG</td><td>৮</td></tr>
<tr><td class="hl">Lakehouse</td><td>ACID on S3 + time travel</td><td>৯</td></tr>
<tr><td class="hl">Synthesis</td><td>সব মিলে — pipeline</td><td>১০</td></tr></table>`
  }
});
