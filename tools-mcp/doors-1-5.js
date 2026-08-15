// ════════════════════════════════════════
// সরঞ্জাম নির্মাণ — DOORS 1-5
// Tools & MCP: Function Calling → Patterns
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: FUNCTION CALLING DEEP DIVE ══
doors.push({
  num:1, icon:"🔧", color:"#ea580c", name:"ফাংশনের কক্ষ",
  subtitle:"The Function Chamber", tech:"Function Calling Internals",
  spirit:"আলা — উপকরণ, সরঞ্জাম",
  secret:"Function calling = LLM এর জন্য একটা হাত। কিন্তু ভেতরে কী হয়? LLM JSON schema দেখে, সিদ্ধান্ত নেয় কোন function, কোন arguments। তারপর তুমি execute করো, ফলাফল ফেরত দাও। এটাই function calling — LLM থেকে বাস্তব কাজে।",
  recall:{
    q:"ফাংশনের কক্ষে কেন প্রতিটা হাতুড়ির নিয়ম লেখা?",
    qen:"Why is each hammer labeled with rules?",
    a:"কারণ LLM প্রতিটা function-এর description দেখে সিদ্ধান্ত নেয়। নিয়ম স্পষ্ট না হলে ভুল হাতুড়ি বাছে। Function calling = নিয়ম দেখে সঠিক টুল বাছা। আলা — উপকরণ।",
    aen:"Because the LLM sees each function description and decides. Unclear rules = wrong tool chosen. Function calling = choosing the right tool by rules. Ala — tools."
  },
  story:`<p class="scene-setting">প্রথম কর্মশালা। ফাংশনের কক্ষ। দেয়ালে অনেক হাতুড়ি — প্রতিটার নিচে লেবেল: নাম, কাজ, কীভাবে ব্যবহার। কারিগর দাউদ বললেন — "আমি প্রতিটা হাতুড়ির নিয়ম জানি। কাজ এলে আমি দেয়াল দেখি, সঠিক হাতুড়ি বাছি। LLM-ও তেমনি — function list দেখে, সঠিক function বাছে।"</p>
<p class="scene-setting en">The first workshop. Function chamber. Many hammers on walls — each labeled: name, purpose, how to use. Craftsman Dawud said — "I know each hammer's rules. When work comes, I look at the wall, pick the right hammer. The LLM too — sees the function list, picks the right function."</p>

<div class="dialogue">Embeddings বইয়ে তুমি শিখেছ অর্থের জ্যামিতি। এখন আমি বলি — অর্থ শুধু কথায় নয়, কাজেও দরকার। Function calling হলো LLM কে হাত দেওয়ার প্রথম ধাপ। কিন্তু ভেতরে কী হয়? LLM কীভাবে জানে কোন function কখন ব্যবহার করতে হবে? এটাই এই কর্মশালার রহস্য।</div>
<div class="dialogue en">"In the Embeddings book you learned the geometry of meaning. Now I say — meaning isn't just for words, it's for action. Function calling is the first step in giving the LLM hands. But what happens inside? How does the LLM know which function to use when? This is this workshop's secret."</div>

<div style="text-align:center;margin:1.2rem 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" style="max-width:100%;height:auto;border-radius:12px;background:#070a0f;border:1px solid rgba(61,214,196,.2)"><defs><marker id="ar1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3dd6c4"/></marker><linearGradient id="g1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ea580c"/><stop offset="100%" stop-color="#fb923c"/></linearGradient></defs><rect x="15" y="55" width="100" height="50" rx="8" fill="rgba(234,88,12,.1)" stroke="#ea580c" stroke-width="1.5"/><text x="65" y="78" text-anchor="middle" fill="#e8e6f0" font-size="11" font-family="sans-serif">User</text><text x="65" y="93" text-anchor="middle" fill="#9290a8" font-size="9" font-family="sans-serif">query</text><line x1="115" y1="80" x2="155" y2="80" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#ar1)"/><rect x="160" y="55" width="110" height="50" rx="8" fill="url(#g1)" stroke="#fb923c" stroke-width="1.5"/><text x="215" y="78" text-anchor="middle" fill="#0c0805" font-size="11" font-weight="bold" font-family="sans-serif">LLM</text><text x="215" y="93" text-anchor="middle" fill="#0c0805" font-size="9" font-family="sans-serif">decides</text><line x1="270" y1="80" x2="310" y2="80" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#ar1)"/><rect x="315" y="40" width="130" height="80" rx="8" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1.5" stroke-dasharray="4,3"/><text x="380" y="62" text-anchor="middle" fill="#3dd6c4" font-size="10" font-weight="bold" font-family="monospace">tool_call</text><text x="380" y="78" text-anchor="middle" fill="#e8e6f0" font-size="9" font-family="monospace">{name, args}</text><text x="380" y="94" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">structured JSON</text><text x="380" y="110" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">NOT plain text</text><line x1="445" y1="80" x2="485" y2="80" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#ar1)"/><rect x="490" y="55" width="95" height="50" rx="8" fill="rgba(82,196,26,.1)" stroke="#52c41a" stroke-width="1.5"/><text x="537" y="76" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold" font-family="sans-serif">Execute</text><text x="537" y="91" text-anchor="middle" fill="#9290a8" font-size="9" font-family="sans-serif">result</text><path d="M537,105 Q537,165 380,165 Q215,165 215,105" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#ar1)"/><text x="380" y="185" text-anchor="middle" fill="#ea580c" font-size="9" font-family="sans-serif">result fed back to LLM</text><rect x="120" y="200" width="360" height="35" rx="8" fill="rgba(234,88,12,.06)" stroke="rgba(234,88,12,.2)" stroke-width="1"/><text x="300" y="222" text-anchor="middle" fill="#fb923c" font-size="10" font-family="sans-serif">LLM formulates natural language response from tool result</text></svg><div style="font-size:.8rem;color:#9290a8;margin-top:.4rem">চিত্র ১ — ফাংশন কলিং: LLM থেকে বাস্তব কাজে</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — MCP Server Crash:</strong> MCP server crashed mid-tool-call — client hung indefinitely. Fix: always set timeouts on tool execution.</div></div>


<div class="code-block"># ── STEP 1: Function calling — inside the machine ──
# How LLMs call functions.

function_calling = """
FUNCTION CALLING — INSIDE THE MACHINE:

HOW IT WORKS (step by step):

1. YOU DEFINE TOOLS (JSON schema):
   tools = [{
     name: "get_weather",
     description: "Get current weather for a city",
     parameters: {
       city: {type: "string"},
       unit: {type: "string", enum: ["C", "F"]}
     }
   }]

2. LLM RECEIVES:
   → system prompt + tools + user message (all in context)
   → LLM sees: "available tools: get_weather, search, ..."

3. LLM DECIDES:
   → Analyzes user intent
   → Matches to tool description
   → Outputs structured call:
     {"tool": "get_weather", "arguments": {"city": "Dhaka"}}
   → NOT regular text — structured JSON!

4. YOU EXECUTE:
   → Your code runs get_weather("Dhaka")
   → Returns: "32C, humid, rain"

5. LLM FORMULATES RESPONSE:
   → Receives tool result
   → Generates: "It is 32C in Dhaka with rain expected."

PROVIDER IMPLEMENTATIONS:
  OpenAI: "tools" parameter, parallel calling, strict mode
  Claude: "tool_use" content block, very reliable for complex chains
  Gemini: "function_calling" parameter, multimodal integration
  Open models: Llama 3.1 and Mistral have built-in tool use

PARALLEL FUNCTION CALLING:
  User: "Weather in NYC and LA?"
  LLM outputs TWO calls: get_weather("NYC"), get_weather("LA")
  → Both execute in parallel → faster

STRICT MODE (OpenAI):
  → Guarantees valid JSON arguments
  → No hallucinated parameters
  → Schema enforcement at generation time

TOKEN COST:
  → Each tool: ~100-300 tokens of context
  → 10 tools = ~2K tokens per request
  → Keep descriptions concise, remove unused tools

PYTHON (OpenAI function calling):
  from openai import OpenAI
  client = OpenAI()

  tools = [{
      "type": "function",
      "function": {
          "name": "get_weather",
          "description": "Get weather for a city",
          "parameters": {
              "type": "object",
              "properties": {
                  "city": {"type": "string"}
              },
              "required": ["city"]
          }
      }
  }]

  response = client.chat.completions.create(
      model="gpt-4",
      messages=[{"role": "user", "content": "Weather in Dhaka?"}],
      tools=tools,
      tool_choice="auto"
  )

  call = response.choices[0].message.tool_calls[0]
  args = json.loads(call.function.arguments)
  weather = get_weather(args["city"])
  # Feed result back to LLM...
"""

print(function_calling)</div>

<div class="code-block"># ── STEP 2: Tool design principles ──
# Building tools LLMs love to use.

tool_design = """
TOOL DESIGN — BUILDING TOOLS LLMS LOVE:

A good tool is one the LLM uses correctly without confusion.

DESIGN PRINCIPLES:

1. CRYSTAL-CLEAR DESCRIPTIONS:
   → LLM reads description to decide when to use
   → Bad: "Searches things"
   → Good: "Search the web for current information. Use when the
     question requires up-to-date facts, recent events, or real-time data."

2. SIMPLE PARAMETERS:
   → Few parameters (3-5 max)
   → Clear names: "city" not "location_param_1"
   → Use enums for constrained values
   → Avoid deeply nested objects

3. GOOD ERROR MESSAGES:
   → LLM needs to recover from errors
   → Bad: "Error 500"
   → Good: "City not found. Try the full city name or include country.
     Examples: 'Dhaka, Bangladesh' or 'Springfield, IL'"

4. ONE TOOL = ONE TASK:
   → Don't make "do_everything" tool
   → Separate: search_web, search_images, search_news
   → LLM picks the right one based on description

5. IDEMPOTENT WHEN POSSIBLE:
   → Same call → same result (safe to retry)
   → GET requests: idempotent
   → POST/PUT: may not be idempotent (add idempotency keys)

6. RATE LIMITING:
   → Limit calls per user/session
   → Prevent runaway agents
   → Cost control

TOOL SCHEMA EXAMPLES:

  # GOOD: simple, clear
  {
    "name": "calculate",
    "description": "Evaluate a mathematical expression. Use for precise calculations.",
    "parameters": {
      "type": "object",
      "properties": {
        "expression": {"type": "string", "description": "e.g., '2+2', 'sin(3.14)'"}
      },
      "required": ["expression"]
    }
  }

  # BAD: complex, confusing
  {
    "name": "process_data",
    "description": "Process stuff",  # too vague!
    "parameters": {
      "type": "object",
      "properties": {
        "data": {"type": "object", "properties": {...}},  # nested!
        "mode": {"type": "string"},  # no enum!
        "flag1": {"type": "boolean"},  # unclear purpose
        "flag2": {"type": "boolean"}   # too many params
      }
    }
  }

COMMON TOOL CATEGORIES:
  → Information: web_search, read_file, get_weather
  → Computation: calculate, run_code, query_database
  → Communication: send_email, send_sms, post_message
  → File operations: read, write, list, delete
  → External APIs: any REST API wrapper

SECURITY:
  → Validate ALL arguments (type, range, format)
  → Sanitize inputs (prevent injection)
  → Permission check (can user do this?)
  → Audit log (who called what when)
  → Sandbox (isolate side effects)
"""

print(tool_design)</div>

<div class="code-block"># ── STEP 3: MCP (Model Context Protocol) ──
# The universal standard for LLM tools.

mcp = """
MCP — MODEL CONTEXT PROTOCOL:

Anthropic's open standard for connecting LLMs to external tools and data.
"USB-C for AI" — one protocol, many tools, any LLM.

THE PROBLEM MCP SOLVES:
  → Before MCP: every LLM had different tool APIs
    OpenAI tools ≠ Claude tools ≠ Gemini tools
  → Custom integration for each model
  → Tools locked to one provider

MCP SOLUTION:
  → Standard protocol (JSON-RPC over stdio/SSE)
  → MCP Server: exposes tools/resources (anyone can build)
  → MCP Client: any LLM app (Claude, Cursor, etc.)
  → Write tool once → works with any MCP-compatible client

ARCHITECTURE:
  LLM App (MCP Client) ←→ MCP Protocol ←→ MCP Server ←→ Tools/Data

  Example:
    Claude Desktop (client) → GitHub MCP Server → GitHub API
    Claude Desktop (client) → Database MCP Server → PostgreSQL
    Claude Desktop (client) → File MCP Server → local files

MCP SERVER TYPES:

1. TOOL SERVERS:
   → Expose callable functions
   → e.g., "search_code", "create_issue", "run_query"

2. RESOURCE SERVERS:
   → Expose data/context
   → e.g., "project_files", "database_schema"

3. PROMPT SERVERS:
   → Expose pre-built prompts
   → e.g., "code_review_prompt", "debug_prompt"

PYTHON (MCP server):
  from mcp import Server, Tool
  import mcp.types as types

  server = Server("my-tools")

  @server.list_tools()
  async def list_tools():
      return [
          Tool(
              name="calculate",
              description="Evaluate a math expression",
              inputSchema={
                  "type": "object",
                  "properties": {
                      "expression": {"type": "string"}
                  },
                  "required": ["expression"]
              }
          )
      ]

  @server.call_tool()
  async def call_tool(name, arguments):
      if name == "calculate":
          result = eval(arguments["expression"])
          return [types.TextContent(type="text", text=str(result))]

  # Run server:
  import mcp.server.stdio
  async with mcp.server.stdio.stdio_server() as (read, write):
      await server.run(read, write)

EXISTING MCP SERVERS:
  → GitHub: repo management, issues, PRs
  → PostgreSQL: database queries
  → Filesystem: read/write files
  → Brave Search: web search
  → Google Drive: document access
  → Slack: messaging
  → Puppeteer: browser automation

WHY MCP MATTERS:
  → Tool ecosystem: write once, use everywhere
  → Community: shared tool marketplace
  → Composability: combine multiple MCP servers
  → Future-proof: new LLMs just implement MCP client
"""

print(mcp)</div>

<div class="code-block"># ── STEP 4: Tool use patterns ──
# Sequential, parallel, conditional.

patterns = """
TOOL USE PATTERNS:

1. SEQUENTIAL (Pipeline):
   Tool A → result → Tool B → result → answer
   → Each tool depends on previous result
   → e.g., search → scrape → summarize

2. PARALLEL (Fan-out):
   Tool A ─┐
   Tool B ─┤→ combine → answer
   Tool C ─┘
   → Independent calls, execute simultaneously
   → e.g., "Compare prices from 3 stores"

3. CONDITIONAL:
   if tool_A result is X:
       call tool_B
   else:
       call tool_C
   → LLM decides based on intermediate results

4. ITERATIVE (loop):
   while not done:
       decide next tool
       call tool
       observe result
   → ReAct pattern, agentic loop

5. FALLBACK:
   try tool_A
   if error: try tool_B
   if error: try tool_C
   → Graceful degradation

PYTHON (sequential pattern):
  def sequential_agent(query):
      # Step 1: search
      results = web_search(query)
      # Step 2: scrape top result
      content = scrape_page(results[0]['url'])
      # Step 3: summarize
      summary = llm.summarize(content)
      return summary

PYTHON (parallel pattern with asyncio):
  import asyncio

  async def parallel_agent(query):
      # Launch all tools at once:
      results = await asyncio.gather(
          get_weather("Dhaka"),
          get_weather("London"),
          get_weather("Tokyo")
      )
      # Combine:
      return f"Weather: Dhaka={results[0]}, London={results[1]}, Tokyo={results[2]}"

PYTHON (iterative ReAct):
  def react_agent(query, tools, max_steps=10):
      messages = [{"role": "user", "content": query}]
      for step in range(max_steps):
          response = llm.generate(messages, tools=tools)
          if response.has_tool_calls:
              for call in response.tool_calls:
                  result = execute_tool(call)
                  messages.append(tool_result(result))
          else:
              return response.text  # final answer
      return "Max steps reached"
"""

print(patterns)</div>

<div class="code-block"># ── STEP 5: Tool error handling and safety ──
# Building robust tool-using agents.

safety = """
TOOL ERROR HANDLING & SAFETY:

ERROR TYPES:

1. TOOL NOT FOUND:
   → LLM calls non-existent tool
   → Fix: return clear error, list available tools

2. INVALID ARGUMENTS:
   → Wrong type, missing required field, out of range
   → Fix: validate with JSON schema, return helpful error
   → "Expected 'city' as string, got number 12345"

3. TOOL EXECUTION FAILURE:
   → API down, network error, timeout
   → Fix: retry with backoff, fallback, or report error to LLM

4. UNEXPECTED OUTPUT:
   → Tool returns very long output, binary, or error page
   → Fix: truncate, filter, format for LLM consumption

5. INFINITE LOOPS:
   → Agent keeps calling same tool with same args
   → Fix: max iterations, dedup detection, break condition

ERROR MESSAGE BEST PRACTICES:
  # BAD (LLM can't recover):
  {"error": "500"}

  # GOOD (LLM can adjust):
  {"error": "Rate limit exceeded. Wait 60 seconds and retry,
   or reduce the scope of your query."}

  # BAD:
  {"error": "not found"}

  # GOOD:
  {"error": "User 'john_doe' not found.
   Did you mean: 'john.doe', 'johndoe', 'jdoe'?"}

SAFETY MEASURES:

1. INPUT VALIDATION:
   → JSON schema validation (types, required fields)
   → Range checks (page > 0, limit <= 100)
   → Format checks (email, URL, date)

2. OUTPUT SANITIZATION:
   → Truncate long outputs (10K chars max)
   → Strip PII from results
   → Format: JSON, not raw HTML

3. PERMISSION CHECKS:
   → Can this user use this tool?
   → Can they access this resource?
   → Rate limit: N calls per minute

4. SANDBOXING:
   → Code execution: Docker container, no network
   → File access: restricted directories
   → Database: read-only or parameterized queries

5. HUMAN-IN-THE-LOOP:
   → Require approval for destructive actions
   → delete_file, send_email, make_payment
   → Show preview: "About to send email to X. Approve?"

PYTHON (safe tool execution):
  def safe_execute(tool_name, args, user):
      # 1. Validate arguments:
      if not validate_schema(tool_name, args):
          return {"error": "Invalid arguments: " + get_validation_error()}

      # 2. Check permissions:
      if not user.can_use(tool_name):
          return {"error": "Permission denied for " + tool_name}

      # 3. Rate limit:
      if rate_limited(user, tool_name):
          return {"error": "Rate limit. Try again in 60 seconds."}

      # 4. Check if risky (needs approval):
      if tool_name in RISKY_TOOLS:
          approval = request_human_approval(tool_name, args)
          if not approval:
              return {"error": "Action not approved by user."}

      # 5. Execute with timeout:
      try:
          result = execute_with_timeout(tool_name, args, timeout=30)
          return sanitize_output(result)
      except TimeoutError:
          return {"error": "Tool execution timed out after 30 seconds."}
      except Exception as e:
          return {"error": str(e) + ". Please try different arguments."}
"""

print(safety)</div>

<div class="code-block"># ── STEP 6: Tools and MCP best practices ──
# Production tool systems.

best_practices = [
    "Write tool descriptions for an LLM audience (clear, specific)",
    "Keep parameters simple (3-5 max, clear names, use enums)",
    "Validate ALL arguments before execution",
    "Return helpful error messages the LLM can act on",
    "Limit tool count (5-10 max, too many = confusion)",
    "Sanitize and truncate tool outputs for LLM consumption",
    "Set max iterations on agent loops (prevent infinite loops)",
    "Require human approval for destructive/irreversible actions",
    "Log every tool call for debugging and audit",
    "Use MCP protocol for interoperability across LLM providers",
    "Cache tool results when possible (avoid redundant calls)",
    "Handle timeouts gracefully (30s default for most tools)",
    "Rate limit per user/session (prevent abuse)",
    "Test with adversarial inputs (injection attempts)",
    "Provide fallback tools when primary fails",
]

print("TOOLS & MCP BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Component        │ Recommendation                │
# ├──────────────────┼──────────────────────────────────┤
# │ Tool definition  │ JSON schema, clear description│
# │ Execution        │ Safe, validated, sandboxed    │
# │ Error handling   │ Helpful messages, retries     │
# │ Protocol         │ MCP for interoperability      │
# │ Safety           │ Human-in-loop for risky       │
# │ Performance      │ Parallel calls, caching       │
# │ Monitoring       │ Log every call                │
# └──────────────────┴──────────────────────────────────┘</div>

PROVIDER IMPLEMENTATIONS:

  OpenAI:
    → "tools" parameter in API call
    → parallel function calling (multiple at once)
    → strict mode: forces valid JSON
    → most mature implementation
  
  Anthropic (Claude):
    → "tool_use" content block
    → very reliable for complex tool chains
    → excellent at multi-step tool use
    → less likely to hallucinate function calls
  
  Google (Gemini):
    → "function_calling" parameter
    → good multimodal tool integration
  
  Open models (Llama, Mistral):
    → prompt-based (less structured)
    → requires careful prompting
    → Mistral: native function calling support
    → Llama ৩.১: built-in tool use

FUNCTION CALLING vs TOOL USE:

  Function Calling (original):
    → single function, single call
    → you manage the loop
  
  Tool Use (modern):
    → agentic loop: LLM calls tools iteratively
    → LLM decides: call tool → see result → 
      call another → synthesize
    → Claude tool_use, OpenAI tool choice auto

PARALLEL FUNCTION CALLING (OpenAI):
  
  User: "What is the weather in NYC and LA?"
  
  LLM outputs TWO function calls:
    ১. get_weather("New York")
    ২. get_weather("Los Angeles")
  
  → both execute in parallel!
  → faster than sequential
  → results combined in final answer

STRICT MODE (OpenAI, ২০২৪):
  → guarantees valid JSON arguments
  → no hallucinated parameters
  → no extra fields
  → schema enforcement at generation time
  
  tools = [{
    name: "search",
    parameters: {
      type: "object",
      properties: {...},
      required: ["query"],
      additionalProperties: false  // strict!
    },
    strict: true  // ← enforces schema
  }]

TOKEN COST:
  → tool definitions consume context tokens
  → each tool: ~১০০-৩০০ tokens
  → ১০ tools = ~২K tokens per request
  → keep descriptions concise!
  → remove unused tools

<div class="dialogue">আলা — tools, equipment, instruments। কুরআনে আল্লাহ বলেন — "আমি মানুষকে দিয়েছি যাবতীয় সরঞ্জাম।" (৯০:৮-১০)। মানুষের হাত হলো আলা — কাজের সরঞ্জাম। LLM-এর function calling-ও আলা — কাজের সরঞ্জাম। আলা ছাড়া মানুষ অসহায়, টুল ছাড়া LLM অসহায়। আলা — সরঞ্জামের নিয়ামত।</div>
<div class="dialogue en">"Ala — tools, equipment, instruments. Allah says — 'We gave man all tools.' (90:8-10). Human hands are ala — tools for work. LLM function calling too — tools for work. Without ala humans are helpless, without tools LLMs are helpless. Ala — the gift of tools."</div>`,
  senior:{
    title:"Function Calling — Quick Start",
    body:`<p><strong>OpenAI:</strong> tools parameter in chat.completions.create। response.choices[০].message.tool_calls → execute → send result back।</p><p><strong>Claude:</strong> tools parameter in messages.create। response.content এ tool_use block → execute → tool_result দাও।</p><p><strong>Rule ১:</strong> Description is everything। "Search the web" নয়, "Search the internet for current information when the user asks about recent events, real-time data, or facts you are unsure about"।</p><p><strong>Rule ২:</strong> strict mode (OpenAI) → guaranteed valid JSON।</p><p><strong>Rule ৩:</strong> Keep tool count < ১০। More = more tokens, more confusion।</p>`
  }
});

// ══ DOOR 2: TOOL DESIGN ══
doors.push({
  num:2, icon:"🔌", color:"#fb923c", name:"নকশার কক্ষ",
  subtitle:"The Design Chamber", tech:"Tool Design Principles",
  spirit:"তাহকিক — সত্যিকারের নির্মাণ",
  secret:"ভালো tool = ভালো description। খারাপ tool = ভুল ব্যবহার। প্রতিটা tool-এর নাম স্পষ্ট, description বিস্তারিত, parameters typed। কখন ব্যবহার করবে, কখন করবে না — সব লেখা। Tool design = সঠিক নির্মাণ।",
  recall:{
    q:"নকশার কক্ষে কেন প্রতিটা টুলের বিস্তারিত নকশা?",
    qen:"Why detailed design for each tool?",
    a:"কারণ ভালো description = সঠিক ব্যবহার। খারাপ description = ভুল। নাম স্পষ্ট, parameters typed, কখন ব্যবহার লেখা। Tool design = সঠিক নির্মাণ। তাহকিক।",
    aen:"Because good description = correct use. Bad description = error. Clear names, typed parameters, when-to-use written. Tool design = correct construction. Tahqiq."
  },
  story:`<p class="scene-setting">দ্বিতীয় কর্মশালা। নকশার কক্ষ। কারিগর সাকিনা প্রতিটা টুলের নকশা আঁকছেন — নাম, কাজ, মাপ, কখন ব্যবহার। "একটা টুল শুধু বানালে হবে না," তিনি বললেন। "নকশা দরকার। LLM কীভাবে বুঝবে কোন টুল কখন? description দিয়ে। ভালো description = সঠিক ব্যবহার। খারাপ = ভুল।"</p>
<p class="scene-setting en">The second workshop. Design chamber. Craftswoman Sakina draws each tool's design — name, purpose, dimensions, when to use. "Just making a tool isn't enough," she said. "Design is needed. How will the LLM know which tool when? Through description. Good description = correct use. Bad = wrong."</p>

<div class="dialogue">Function calling বলেছিলেন — LLM টুল ব্যবহার করে। কিন্তু আমি বলি — কীভাবে? টুল ভালো হতে হবে। Description স্পষ্ট হতে হবে। নাম স্পষ্ট হতে হবে। Parameters সঠিক হতে হবে। টুল design করা একটা শিল্প — যে ভালো design করে, সে ভালো ফল পায়।</div>
<div class="dialogue en">"Function calling said — the LLM uses tools. But I say — how? Tools must be good. Descriptions must be clear. Names must be precise. Parameters must be correct. Tool design is an art — one who designs well, gets good results."</div>

<div style="text-align:center;margin:1.2rem 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" style="max-width:100%;height:auto;border-radius:12px;background:#070a0f;border:1px solid rgba(61,214,196,.2)"><defs><marker id="ar2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3dd6c4"/></marker></defs><rect x="20" y="20" width="560" height="40" rx="8" fill="rgba(234,88,12,.1)" stroke="#ea580c" stroke-width="1.5"/><text x="300" y="45" text-anchor="middle" fill="#fb923c" font-size="12" font-weight="bold" font-family="monospace">name: &quot;search_web&quot;</text><rect x="20" y="75" width="270" height="40" rx="8" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1.5"/><text x="155" y="100" text-anchor="middle" fill="#3dd6c4" font-size="11" font-family="monospace">description: when + when NOT</text><rect x="310" y="75" width="270" height="40" rx="8" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1.5"/><text x="445" y="100" text-anchor="middle" fill="#3dd6c4" font-size="11" font-family="monospace">output: documented format</text><text x="300" y="140" text-anchor="middle" fill="#9290a8" font-size="11" font-family="sans-serif">parameters</text><line x1="300" y1="145" x2="300" y2="150" stroke="#9290a8" stroke-width="1"/><rect x="20" y="155" width="175" height="95" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="107" y="178" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold" font-family="monospace">query: string</text><text x="107" y="196" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">minLength: 3</text><text x="107" y="210" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">maxLength: 200</text><text x="107" y="227" text-anchor="middle" fill="#5e5c74" font-size="8" font-style="italic" font-family="sans-serif">required</text><rect x="212" y="155" width="175" height="95" rx="8" fill="rgba(82,196,26,.06)" stroke="#52c41a" stroke-width="1.2" stroke-dasharray="4,3"/><text x="300" y="178" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold" font-family="monospace">num_results: int</text><text x="300" y="196" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">default: 5</text><text x="300" y="210" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">min:1, max:20</text><text x="300" y="227" text-anchor="middle" fill="#5e5c74" font-size="8" font-style="italic" font-family="sans-serif">optional</text><rect x="405" y="155" width="175" height="95" rx="8" fill="rgba(255,107,53,.06)" stroke="#ff6b35" stroke-width="1.2"/><text x="497" y="178" text-anchor="middle" fill="#ff6b35" font-size="9" font-weight="bold" font-family="sans-serif">CONSTRAINTS</text><text x="497" y="196" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">type-checked</text><text x="497" y="210" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">range-limited</text><text x="497" y="227" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">sanitized</text><text x="300" y="270" text-anchor="middle" fill="#fb923c" font-size="9" font-family="sans-serif">স্পষ্ট নাম + বিস্তারিত description + typed parameters = ভালো tool</text></svg><div style="font-size:.8rem;color:#9290a8;margin-top:.4rem">চিত্র ২ — টুল স্কিমা: নাম, বর্ণনা, typed parameters</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Tool Schema Mismatch:</strong> MCP tool definition said 3 params, function expected 5 — silent failure. Fix: auto-generate schemas from function signatures.</div></div>


<div class="code-block">Tool Design — Building Tools LLMs Love:

GOLDEN RULES OF TOOL DESIGN:

১. NAME: clear, verb-based
  ❌ "data" (what data? what action?)
  ❌ "proc_১" (meaningless)
  ✅ "search_web" (clear action)
  ✅ "send_email" (obvious purpose)
  ✅ "get_stock_price" (specific)

২. DESCRIPTION: when to use + when NOT to
  ❌ "Searches the web" (too vague)
  ✅ "Search the web for current information. 
      Use when the user asks about recent 
      events, real-time data, or facts you 
      are unsure about. Do NOT use for 
      opinions, math, or coding."
  
  → description = the LLM guidebook
  → more detail = better selection
  → include NEGATIVE examples ("do NOT use for...")

৩. PARAMETERS: typed, described, constrained
  ❌ {query: "string"} (what kind of query?)
  ✅ {
       query: {
         type: "string",
         description: "Search query in English. 
           Be specific: 'Python async best 
           practices' not 'python'.",
         minLength: ৩,
         maxLength: ২০০
       },
       num_results: {
         type: "integer",
         default: ৫,
         minimum: ১,
         maximum: ২০
       }
     }

৪. OUTPUT FORMAT: clear return type
  → what does the tool return?
  → string? object? array?
  → document the shape
  
  ✅ "Returns JSON: {title, url, snippet}[]"

TOOL DESIGN ANTI-PATTERNS:

  ❌ GOD TOOL (does everything)
    {name: "do_anything", 
     description: "Does anything you ask"}
    → LLM calls it for EVERYTHING
    → no precision
  
  ✅ ATOMIC TOOLS (one thing each)
    {name: "search", ...}
    {name: "calculate", ...}
    {name: "send_email", ...}
    → each tool = one clear action
    → LLM can choose precisely

  ❌ VAGUE DESCRIPTIONS
    → "gets data" (what data?)
    → LLM guesses → wrong calls
  
  ✅ SPECIFIC DESCRIPTIONS  
    → "gets the current stock price for 
       a given ticker symbol from Yahoo 
       Finance. Returns price in USD."
    → LLM knows exactly what to expect

  ❌ NO ERROR HANDLING
    → tool fails → LLM confused
  
  ✅ CLEAR ERROR MESSAGES
    → return: "Error: city not found. 
       Please provide a valid city name."
    → LLM can retry with correction!

TOOL CATEGORIES (production):

  INFORMATION TOOLS:
    search_web, get_weather, get_stock_price,
    get_time, get_news, get_calendar
    
  COMPUTATION TOOLS:
    calculate, run_python, run_sql_query,
    convert_currency, translate_text
    
  COMMUNICATION TOOLS:
    send_email, send_sms, post_tweet,
    create_calendar_event, send_slack
    
  FILE TOOLS:
    read_file, write_file, list_directory,
    search_files, upload_file
    
  CODE TOOLS:
    run_code, git_commit, create_pr,
    run_tests, deploy
    
  BROWSER TOOLS:
    navigate_url, click_element, type_text,
    take_screenshot, extract_text

TOOL SECURITY:
  → whitelist: only defined tools allowed
  → input validation: sanitize arguments
  → rate limiting: max calls per minute
  → sandboxing: isolated execution
  → audit logging: every tool call logged
  → human approval: for destructive tools</div>

<div class="dialogue">তাহকিক — true construction, authentic building। কুরআনে আল্লাহ বলেন — "যিনি সৃষ্টি করেছেন এবং নিয়মে বেঁধেছেন।" (৮৭:২)। নিয়মে বাঁধা = তাহকিক। টুল design-ও তাহকিক — নিয়ম অনুযায়ী নির্মাণ। নাম, description, parameters — সব নিয়মে। যে তাহকিক করে, সে নিখুঁত বানায়।</div>
<div class="dialogue en">"Tahqiq — true construction, authentic building. Allah says — 'Who created and proportioned.' (87:2). Proportioning = tahqiq. Tool design too — building by rules. Name, description, parameters — all by rules. One who builds with tahqiq, makes perfect tools."</div>`,
  senior:{
    title:"Tool Design Checklist",
    body:`<p>☐ Name: verb + object (search_web, not data)</p><p>☐ Description: WHEN to use + when NOT to</p><p>☐ Parameters: typed, described, constrained</p><p>☐ Output: documented return format</p><p>☐ Error handling: clear error messages</p><p>☐ Atomic: one tool = one action</p><p>☐ Security: validated, rate-limited, logged</p><p>☐ Count: < ১০ tools (more = confusion + tokens)</p>`
  }
});

// ══ DOOR 3: MCP (MODEL CONTEXT PROTOCOL) ══
doors.push({
  num:3, icon:"📐", color:"#ea580c", name:"সংযোগের কক্ষ",
  subtitle:"The Connection Chamber", tech:"Model Context Protocol (MCP)",
  spirit:"সিলসিলা — শৃঙ্খল, সংযোগ",
  secret:"প্রতিটা টুল আলাদা বানানো কঠিন। MCP = একটা standard protocol। একবার MCP server বানাও — যেকোনো LLM ব্যবহার করতে পারে। Claude, Cursor, Windsurf — সব MCP সাপোর্ট করে। এক টুল, সব LLM। সিলসিলা — সংযোগের শৃঙ্খল।",
  recall:{
    q:"সংযোগের কক্ষে কেন এক adapter দিয়ে সব tool চালানো যায়?",
    qen:"Why can one adapter run all tools?",
    a:"কারণ MCP = standard protocol। এক MCP server বানাও — যেকোনো LLM ব্যবহার করে। Claude, Cursor সব। এক টুল, সব LLM। সিলসিলা — সংযোগের শৃঙ্খল।",
    aen:"Because MCP = standard protocol. Build one MCP server — any LLM uses it. Claude, Cursor all. One tool, all LLMs. Silsila — connection chain."
  },
  story:`<p class="scene-setting">তৃতীয় কর্মশালা। সংযোগের কক্ষ। একটা বিশাল বোর্ড — উপরে অনেক plug, নিচে একটা universal adapter। যেকোনো tool, যেকোনো LLM — সব এই adapter দিয়ে সংযুক্ত। কারিগর আদনান বললেন — "এর আগে প্রতিটা LLM-এর জন্য আলাদা tool বানাতে হতো। এখন? MCP। এক বার বানাও, সব জায়গায় চলে। সিলসিলা।"</p>
<p class="scene-setting en">The third workshop. Connection chamber. A large board — many plugs above, one universal adapter below. Any tool, any LLM — all connected through this adapter. Craftsman Adnan said — "Before, you had to build separate tools for each LLM. Now? MCP. Build once, runs everywhere. Silsila."</p>

<div class="dialogue">Tool design বলেছিলেন — টুল ভালো করে বানাও। কিন্তু আমি বলি — ভালো টুল বানালেও প্রতিটা LLM-এর জন্য আলাদা? সময় নষ্ট। MCP — Model Context Protocol। Anthropic শুরু করেছে (নভেম্বর ২০২৪), এখন OpenAI ও Google-ও গ্রহণ করেছে। এক MCP server, সব LLM-ে কাজ করে। এটাই টুল ইকোসিস্টেমের ভবিষ্যৎ।</div>
<div class="dialogue en">"Tool design said — build tools well. But I say — even well-built tools, separate for each LLM? Waste of time. MCP — Model Context Protocol. Anthropic started it (November 2024), now OpenAI and Google have adopted it too. One MCP server, works on all LLMs. This is the future of the tool ecosystem."</div>,

<div style="text-align:center;margin:1.2rem 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" style="max-width:100%;height:auto;border-radius:12px;background:#070a0f;border:1px solid rgba(61,214,196,.2)"><defs><marker id="ar3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3dd6c4"/></marker></defs><rect x="20" y="20" width="200" height="40" rx="8" fill="rgba(234,88,12,.1)" stroke="#ea580c" stroke-width="1.5"/><text x="120" y="45" text-anchor="middle" fill="#fb923c" font-size="11" font-weight="bold" font-family="sans-serif">Before MCP: N &#215; M integrations</text><text x="20" y="78" fill="#9290a8" font-size="9" font-family="sans-serif">Tool 1</text><line x1="65" y1="83" x2="125" y2="95" stroke="#ff6b35" stroke-width="1"/><text x="155" y="78" fill="#9290a8" font-size="9" font-family="sans-serif">OpenAI</text><text x="20" y="98" fill="#9290a8" font-size="9" font-family="sans-serif">Tool 1</text><line x1="65" y1="103" x2="125" y2="115" stroke="#ff6b35" stroke-width="1"/><text x="155" y="98" fill="#9290a8" font-size="9" font-family="sans-serif">Claude</text><text x="20" y="118" fill="#9290a8" font-size="9" font-family="sans-serif">Tool 2</text><line x1="65" y1="123" x2="125" y2="95" stroke="#ff6b35" stroke-width="1" stroke-dasharray="3,2"/><line x1="65" y1="123" x2="125" y2="115" stroke="#ff6b35" stroke-width="1" stroke-dasharray="3,2"/><text x="155" y="118" fill="#9290a8" font-size="9" font-family="sans-serif">Gemini</text><text x="120" y="148" text-anchor="middle" fill="#ff6b35" font-size="8" font-family="sans-serif">chaos: every tool &#215; every LLM</text><rect x="380" y="20" width="200" height="40" rx="8" fill="rgba(61,214,196,.1)" stroke="#3dd6c4" stroke-width="1.5"/><text x="480" y="45" text-anchor="middle" fill="#3dd6c4" font-size="11" font-weight="bold" font-family="sans-serif">With MCP: N + M connections</text><rect x="380" y="75" width="200" height="80" rx="8" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1.5"/><text x="480" y="95" text-anchor="middle" fill="#3dd6c4" font-size="11" font-weight="bold" font-family="monospace">MCP Protocol</text><text x="480" y="112" text-anchor="middle" fill="#9290a8" font-size="9" font-family="sans-serif">JSON-RPC 2.0</text><text x="480" y="128" text-anchor="middle" fill="#9290a8" font-size="9" font-family="sans-serif">standard interface</text><text x="480" y="144" text-anchor="middle" fill="#5e5c74" font-size="8" font-style="italic" font-family="sans-serif">like USB-C for AI tools</text><text x="410" y="178" fill="#fb923c" font-size="9" font-family="sans-serif">Claude</text><line x1="445" y1="180" x2="475" y2="158" stroke="#3dd6c4" stroke-width="1" marker-end="url(#ar3)"/><text x="410" y="193" fill="#fb923c" font-size="9" font-family="sans-serif">Cursor</text><line x1="445" y1="195" x2="475" y2="158" stroke="#3dd6c4" stroke-width="1" marker-end="url(#ar3)"/><text x="410" y="208" fill="#fb923c" font-size="9" font-family="sans-serif">Gemini</text><line x1="445" y1="210" x2="475" y2="158" stroke="#3dd6c4" stroke-width="1" marker-end="url(#ar3)"/><text x="500" y="178" fill="#52c41a" font-size="9" font-family="sans-serif">filesystem</text><line x1="495" y1="180" x2="485" y2="158" stroke="#3dd6c4" stroke-width="1" marker-end="url(#ar3)"/><text x="500" y="193" fill="#52c41a" font-size="9" font-family="sans-serif">github</text><line x1="495" y1="195" x2="485" y2="158" stroke="#3dd6c4" stroke-width="1" marker-end="url(#ar3)"/><text x="500" y="208" fill="#52c41a" font-size="9" font-family="sans-serif">database</text><line x1="495" y1="210" x2="485" y2="158" stroke="#3dd6c4" stroke-width="1" marker-end="url(#ar3)"/><rect x="20" y="225" width="560" height="40" rx="8" fill="rgba(234,88,12,.06)" stroke="rgba(234,88,12,.2)" stroke-width="1"/><text x="300" y="242" text-anchor="middle" fill="#fb923c" font-size="10" font-family="sans-serif">এক MCP server বানাও &#8594; যেকোনো LLM ব্যবহার করতে পারে</text><text x="300" y="258" text-anchor="middle" fill="#9290a8" font-size="9" font-family="sans-serif">build once, use everywhere</text></svg><div style="font-size:.8rem;color:#9290a8;margin-top:.4rem">চিত্র ৩ — MCP: এক protocol, সব LLM, সব tool</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Security: Arbitrary Execution:</strong> MCP server gave file system access — client read /etc/passwd. Fix: sandbox MCP servers, container isolation.</div></div>


<div class="code-block">MCP — Model Context Protocol:

THE PROBLEM MCP SOLVES:

  Before MCP:
    → Tool for OpenAI: custom API, custom format
    → Tool for Claude: different API, different format
    → Tool for Gemini: yet another format
    → N tools * M LLMs = N*M integrations!
    → nobody wants to build that
  
  With MCP:
    → Build ONE MCP server
    → ANY MCP-compatible client can use it
    → Claude Desktop, Cursor, Windsurf, Zed...
    → N tools + M clients = N+M connections
    → build once, use everywhere

WHAT IS MCP?

  Anthropic open-sourced MCP (নভেম্বর ২০২৪)
  → standardized protocol for LLM ↔ tools
  → like USB-C for AI tools
  → JSON-RPC ২.০ based
  → client-server architecture

  ২০২৫: বিস্তৃত গ্রহণযোগ্যতা
  → OpenAI গ্রহণ করেছে (Agents SDK)
  → Google (Gemini) গ্রহণ করেছে
  → Microsoft, Cursor, Windsurf, Zed, Replit
  → de facto standard হয়ে উঠছে — এক protocol, সব LLM

  # ────────────────#      MCP      # ────────────────# 
  #   MCP CLIENT    #  ←─────────→  #   MCP SERVER    # 
  #   (Claude,      #   JSON-RPC    #   (your tools)  # 
  #    Cursor, etc) #               #                 # 
  # ────────────────#               # ────────────────# 

MCP ARCHITECTURE:

  Client side (LLM apps):
    → Claude Desktop / Claude Code
    → Cursor (code editor)
    → Windsurf
    → Zed
    → ChatGPT (OpenAI MCP support, ২০২৫)
    → Gemini (Google MCP support, ২০২৫)
    → any app that implements MCP client
  
  Server side (tool providers):
    → File system server (read/write files)
    → GitHub server (PRs, issues, code)
    → Database server (SQL queries)
    → Slack server (messages)
    → Browser server (navigate, scrape)
    → Custom server (YOUR tools!)

  Transport:
    → stdio (local, same machine)
    → SSE (remote, over HTTP)
    → both use JSON-RPC ২.০

MCP CAPABILITIES (৩ types):

১. TOOLS (functions LLM can call)
  → same as function calling
  → but standardized format
  → any MCP client understands

২. RESOURCES (data LLM can read)
  → files, database contents, API responses
  → like RAG but standardized
  → "here is the data you can access"

৩. PROMPTS (templates)
  → pre-made prompt templates
  → standardized sharing
  → "use this prompt structure for X"

BUILDING AN MCP SERVER:

  Python (fastmcp):
    from fastmcp import FastMCP
    
    mcp = FastMCP("my-tools")
    
    @mcp.tool()
    def get_weather(city: str) -> str:
      """Get weather for a city"""
      return fetch_weather(city)
    
    @mcp.tool()
    def search(query: str) -> list:
      """Search the web"""
      return web_search(query)
    
    mcp.run()  # starts MCP server!
  
  → that is it! 
  → any MCP client can now use these tools
  → no per-LLM integration needed

  TypeScript (official SDK):
    import { Server } from "@modelcontextprotocol/sdk"
    // similar pattern, Node.js

MCP ECOSYSTEM (২০২৪-২০২৫):

  Official servers:
    → filesystem (read/write files)
    → github (repos, PRs, issues)
    → gitlab (same for GitLab)
    → postgres (database queries)
    → slack (messages, channels)
    → google-drive (docs, sheets)
    → puppeteer (browser automation)
    → memory (persistent knowledge)
    → brave-search (web search)
    → fetch (HTTP requests)
  
  Community servers:
    → hundreds growing rapidly
    → Notion, Linear, Jira, Discord
    → AWS, Azure, GCP
    → databases, APIs, everything

MCP vs DIRECT FUNCTION CALLING:

  Direct:
    → custom per LLM
    → your code, your format
    → tight coupling
  
  MCP:
    → standard protocol
    → any client
    → loose coupling
    → shareable, reusable
  
  When to use MCP:
    ✅ tools used across multiple LLM apps
    ✅ sharing tools with community
    ✅ standard tool ecosystem
  
  When to use direct:
    ✅ single LLM, single app
    ✅ custom format needed
    ✅ performance-critical (MCP adds overhead)

MCP CONFIGURATION (Claude Desktop):

  claude_desktop_config.json:
  {
    "mcpServers": {
      "filesystem": {
        "command": "npx",
        "args": ["@modelcontextprotocol/server-filesystem", 
                 "/path/to/allowed/dir"]
      },
      "github": {
        "command": "npx",
        "args": ["@modelcontextprotocol/server-github"],
        "env": {"GITHUB_TOKEN": "..."}
      }
    }
  }
  
  → restart Claude Desktop
  → tools now available!
  → Claude can read files, query GitHub</div>

<div class="dialogue">সিলসিলা — chain, connection, linkage। কুরআনে আল্লাহ বলেন — "তোমরা আল্লাহর রশি দৃঢ়ভাবে ধরো, সবাই একসাথে।" (৩:১০৩)। একসাথে = সিলসিলা। MCP-ও সিলসিলা — LLM ও tool একসাথে সংযুক্ত। standard protocol = সবাই এক শৃঙ্খলে। সিলসিলা — সংযোগের শৃঙ্খল। যে সংযুক্ত, সে শক্তিশালী।</div>
<div class="dialogue en">"Silsila — chain, connection, linkage. Allah says — 'Hold fast to the rope of Allah, all together.' (3:103). Together = silsila. MCP too — LLM and tool connected together. Standard protocol = everyone in one chain. Silsila — the chain of connection. One who is connected, is strong."</div>`,
  senior:{
    title:"MCP Start — Build Your First Server",
    body:`<p><strong>Quickest:</strong> pip install fastmcp → write @mcp.tool() functions → mcp.run()। ৫ minutes।</p><p><strong>Claude Desktop:</strong> Add server config to claude_desktop_config.json → restart → tools available।</p><p><strong>Existing servers:</strong> npx @modelcontextprotocol/server-filesystem /path — immediate file access।</p><p><strong>Cursor:</strong> Settings → MCP → add server → tools available in AI chat।</p><p><strong>Share:</strong> Publish MCP server to npm/PyPI → anyone can use your tools with any MCP-compatible LLM!</p>`
  }
});

// ══ DOOR 4: TOOL PATTERNS ══
doors.push({
  num:4, icon:"⚙️", color:"#fb923c", name:"প্যাটার্নের কক্ষ",
  subtitle:"The Pattern Chamber", tech:"Tool Orchestration Patterns",
  spirit:"তাদবির — পরিকল্পনা, ব্যবস্থা",
  secret:"একটা টুল কল করা সহজ। কিন্তু ৫টা টুল সঠিক ক্রমে? Sequential, parallel, conditional, recursive — প্রতিটা pattern আলাদা। সঠিক pattern = সঠিক কাজ। ভুল pattern = বিভ্রান্তি। তাদবির — টুল পরিকল্পনা।",
  recall:{
    q:"প্যাটার্নের কক্ষে কেন একাধিক কাজের ক্রম?",
    qen:"Why multiple task orders?",
    a:"কারণ এক টুল সহজ, কিন্তু অনেক টুল সঠিক ক্রমে কঠিন। Sequential, parallel, conditional — প্রতিটা আলাদা। সঠিক pattern = সঠিক কাজ। তাদবির।",
    aen:"Because one tool is easy, but many tools in right order is hard. Sequential, parallel, conditional — each different. Right pattern = right work. Tadbir."
  },
  story:`<p class="scene-setting">চতুর্থ কর্মশালা। প্যাটার্নের কক্ষ। দেয়ালে নকশা — একটা ধাপ, দুটো সমান্তরাল, শর্তযুক্ত শাখা, পুনরাবৃত্তি। কারিগর মারিয়াম বললেন — "এক টুল সহজ। কিন্তু অনেক টুল? কোনটা আগে? কোনটা পরে? কোনটা সমান্তরাল? এটাই pattern — সঠিক ক্রম।"</p>
<p class="scene-setting en">The fourth workshop. Pattern chamber. Designs on walls — sequential, parallel, conditional branch, recursion. Craftswoman Mariam said — "One tool is easy. But many? Which first? Which after? Which parallel? This is pattern — the right order."</p>

<div class="dialogue">MCP বলেছিলেন — standard protocol দাও। কিন্তু আমি বলি — protocol দিলেও কীভাবে ব্যবহার করবে? এক টুল? সহজ। কিন্তু ৫ টুল? কোনটা আগে, কোনটা পরে? সঠিক pattern ছাড়া টুল = বিশৃঙ্খলা। তাদবির — টুল পরিকল্পনা।</div>
<div class="dialogue en">"MCP said — give standard protocol. But I say — even with protocol, how to use? One tool? Easy. But 5 tools? Which first, which after? Without right pattern, tools = chaos. Tadbir — tool planning."</div>

<div style="text-align:center;margin:1.2rem 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" style="max-width:100%;height:auto;border-radius:12px;background:#070a0f;border:1px solid rgba(61,214,196,.2)"><defs><marker id="ar4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3dd6c4"/></marker></defs><text x="300" y="25" text-anchor="middle" fill="#fb923c" font-size="11" font-weight="bold" font-family="sans-serif">Parallel Tool Use &#8212; fan-out / fan-in</text><rect x="240" y="40" width="120" height="45" rx="8" fill="rgba(234,88,12,.1)" stroke="#ea580c" stroke-width="1.5"/><text x="300" y="60" text-anchor="middle" fill="#e8e6f0" font-size="10" font-family="sans-serif">User query</text><text x="300" y="75" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">&quot;weather NYC + LA?&quot;</text><line x1="280" y1="85" x2="120" y2="120" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#ar4)"/><line x1="300" y1="85" x2="300" y2="120" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#ar4)"/><line x1="320" y1="85" x2="480" y2="120" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#ar4)"/><text x="180" y="105" fill="#3dd6c4" font-size="8" font-style="italic" font-family="sans-serif">concurrent</text><rect x="50" y="125" width="140" height="55" rx="8" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1.5"/><text x="120" y="145" text-anchor="middle" fill="#3dd6c4" font-size="10" font-weight="bold" font-family="monospace">get_weather</text><text x="120" y="160" text-anchor="middle" fill="#9290a8" font-size="8" font-family="monospace">(&quot;New York&quot;)</text><text x="120" y="173" text-anchor="middle" fill="#52c41a" font-size="8" font-family="sans-serif">&#8594; 22C, cloudy</text><rect x="230" y="125" width="140" height="55" rx="8" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1.5"/><text x="300" y="145" text-anchor="middle" fill="#3dd6c4" font-size="10" font-weight="bold" font-family="monospace">get_weather</text><text x="300" y="160" text-anchor="middle" fill="#9290a8" font-size="8" font-family="monospace">(&quot;Los Angeles&quot;)</text><text x="300" y="173" text-anchor="middle" fill="#52c41a" font-size="8" font-family="sans-serif">&#8594; 28C, sunny</text><rect x="410" y="125" width="140" height="55" rx="8" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1.5"/><text x="480" y="145" text-anchor="middle" fill="#3dd6c4" font-size="10" font-weight="bold" font-family="monospace">get_news</text><text x="480" y="160" text-anchor="middle" fill="#9290a8" font-size="8" font-family="monospace">(&quot;today&quot;)</text><text x="480" y="173" text-anchor="middle" fill="#52c41a" font-size="8" font-family="sans-serif">&#8594; headlines</text><line x1="120" y1="180" x2="270" y2="215" stroke="#fb923c" stroke-width="1.5" marker-end="url(#ar4)"/><line x1="300" y1="180" x2="300" y2="215" stroke="#fb923c" stroke-width="1.5" marker-end="url(#ar4)"/><line x1="480" y1="180" x2="330" y2="215" stroke="#fb923c" stroke-width="1.5" marker-end="url(#ar4)"/><rect x="210" y="220" width="180" height="45" rx="8" fill="rgba(234,88,12,.15)" stroke="#fb923c" stroke-width="1.5"/><text x="300" y="240" text-anchor="middle" fill="#fb923c" font-size="10" font-weight="bold" font-family="sans-serif">Merge results</text><text x="300" y="255" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">fan-in &#8594; synthesize</text><rect x="100" y="280" width="400" height="0" rx="0"/><text x="300" y="288" text-anchor="middle" fill="#52c41a" font-size="9" font-family="sans-serif">&#10003; দ্রুত (concurrent) | ✕ coordination দরকার</text></svg><div style="font-size:.8rem;color:#9290a8;margin-top:.4rem">চিত্র ৪ — সমান্তরাল টুল ব্যবহার: একসাথে অনেক কল</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Version Incompatibility:</strong> MCP client v2 called server v1 — protocol mismatch, silent corruption. Fix: version negotiation on handshake.</div></div>


<div class="code-block">PATTERN ১: SEQUENTIAL (pipeline)
  Tool A → Tool B → Tool C
  
  search("RAG papers") → read(top paper) → summarize
  
  ✅ simple, predictable
  ❌ slow (each waits for previous)

PATTERN ২: PARALLEL (fan-out/fan-in)
  Tool A ─# 
  Tool B ─# → merge
  Tool C ─# 
  
  search("topic A") + search("topic B") + search("topic C")
  → all at once → merge results
  
  ✅ fast (concurrent)
  ❌ coordination needed
  → OpenAI: parallel function calling built-in!

PATTERN ৩: CONDITIONAL (branching)
  if condition → Tool A
  else → Tool B
  
  LLM decides based on previous result:
  → search result relevant? → summarize
  → search result irrelevant? → search again
  
  ✅ adaptive
  ❌ harder to debug

PATTERN ৪: ITERATIVE (loop)
  while not done:
    → Tool call → check → repeat
  
  ReAct loop: Thought → Action → Observe → repeat
  
  ✅ powerful (agent-like)
  ❌ risk of infinite loops (max iterations!)

PATTERN ৫: HIERARCHICAL (delegation)
  Manager tool → delegates to sub-tools
  
  build_website:
    → create_database
    → create_api
    → create_frontend
  
  ✅ organized, scalable
  ❌ manager complexity

WHEN LLM CHOOSES TOOLS:

  LLM as orchestrator:
    → LLM sees available tools
    → decides: which tool, what order
    → this IS what makes agents work!
  
  Example conversation:
    User: "Research AI papers and email summary"
    LLM: [plans: search → read → summarize → email]
    LLM: search("AI papers ২০২৪")
    Tool: [results...]
    LLM: read(paper_১), read(paper_২)  // parallel
    Tool: [content...]
    LLM: summarize → draft email
    LLM: send_email(team@company.com, summary)
    LLM: "Done! Emailed summary of ২ papers."

TOOL CHAIN ERRORS:

  Error propagation:
    Tool A fails → Tool B can't run → cascade
  
  Fix:
    → each tool returns clear error
    → LLM adapts: "search failed, try different query"
    → fallback tools
    → human intervention for critical failures</div>

<div class="dialogue">তাদবির — planning, arrangement, strategy। কুরআনে আল্লাহ বলেন — "তোমরা প্রস্তুতি নাও।" (৮:৬০)। প্রস্তুতি = তাদবির। টুল pattern-ও তাদবির — কোন টুল কখন। সঠিক তাদবির = সফল কাজ। যে তাদবির করে, সে সফল।</div>
<div class="dialogue en">"Tadbir — planning, arrangement, strategy. Allah says — 'Be prepared.' (8:60). Preparation = tadbir. Tool patterns too — which tool when. Right tadbir = successful work. One who plans, succeeds."</div>`,
  senior:{
    title:"Pattern Selection — Which When",
    body:`<p><strong>Single tool:</strong> Direct call, no pattern needed।</p><p><strong>Multiple independent tools:</strong> Parallel (OpenAI parallel function calling)।</p><p><strong>Dependent tools (A → B):</strong> Sequential pipeline।</p><p><strong>Uncertain which tool:</strong> Let LLM decide (agent loop)।</p><p><strong>Complex multi-step:</strong> Hierarchical with sub-tasks।</p><p><strong>Always:</strong> Set max iterations for loops। Clear error messages for adaptation।</p>`
  }
});

// ══ DOOR 5: ERROR HANDLING & SAFETY ══
doors.push({
  num:5, icon:"🛡️", color:"#ea580c", name:"সুরক্ষার কক্ষ",
  subtitle:"The Safety Chamber", tech:"Tool Error Handling & Safety",
  spirit:"হিফয — সুরক্ষা, সংরক্ষণ",
  secret:"টুল ভাঙে। API fail করে, টাইমআউট হয়, ভুল argument আসে। Error handling = টুল ভাঙলে কী করবে। LLM-কে বাস্তবসম্মত error দাও, সে নিজে fix করে। Safety = destructive টুল থেকে সুরক্ষা। হিফয — সুরক্ষার গুণ।",
  recall:{
    q:"সুরক্ষার কক্ষে কেন প্রতিটা টুলের নিরাপত্তা?",
    qen:"Why security for every tool?",
    a:"কারণ টুল ভাঙে। API fail, টাইমআউট, ভুল argument। Error handling = ভাঙলে কী করবে। Safety = destructive টুল থেকে সুরক্ষা। হিফয — সুরক্ষা।",
    aen:"Because tools break. API fails, timeout, wrong arguments. Error handling = what to do when broken. Safety = protection from destructive tools. Hifz — protection."
  },
  story:`<p class="scene-setting">পঞ্চম কর্মশালা। সুরক্ষার কক্ষ। প্রতিটা টুলের চারপাশে প্রতিরক্ষা — validation, rate limit, sandbox, audit log। কারিগর সালমা বললেন — "টুল ভাঙে। প্রশ্ন নয় কখন — কী করবে। ভালো error message দাও, LLM নিজে fix করে। Destructive টুল? Human approval। হিফয — সুরক্ষা।"</p>
<p class="scene-setting en">The fifth workshop. Safety chamber. Each tool surrounded by defenses — validation, rate limit, sandbox, audit log. Craftswoman Salma said — "Tools break. Not when — but what to do. Give good error messages, the LLM fixes itself. Destructive tools? Human approval. Hifz — protection."</p>

<div class="dialogue">Pattern কক্ষ বলেছিলেন — সঠিক ক্রমে টুল ব্যবহার করো। কিন্তু আমি বলি — সঠিক ক্রমেও টুল ভাঙে। API down, টাইমআউট, ভুল data। Error handling ছাড়া সব থেমে যায়। আর destructive টুল — delete, send, deploy — এগুলো সুরক্ষা চায়। হিফয — প্রতিটা টুলের সুরক্ষা।</div>
<div class="dialogue en">"The pattern chamber said — use tools in right order. But I say — even in right order, tools break. API down, timeout, wrong data. Without error handling, everything stops. And destructive tools — delete, send, deploy — these need protection. Hifz — protection for every tool."</div>

<div style="text-align:center;margin:1.2rem 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" style="max-width:100%;height:auto;border-radius:12px;background:#070a0f;border:1px solid rgba(61,214,196,.2)"><defs><marker id="ar5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3dd6c4"/></marker></defs><text x="300" y="25" text-anchor="middle" fill="#ff6b35" font-size="11" font-weight="bold" font-family="sans-serif">Error &#8594; LLM Self-Corrects</text><rect x="220" y="40" width="160" height="45" rx="8" fill="rgba(234,88,12,.1)" stroke="#ea580c" stroke-width="1.5"/><text x="300" y="60" text-anchor="middle" fill="#e8e6f0" font-size="10" font-family="monospace">search(&quot;&quot;)</text><text x="300" y="75" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">empty query</text><line x1="300" y1="85" x2="300" y2="110" stroke="#ff6b35" stroke-width="1.5" marker-end="url(#ar5)"/><rect x="180" y="115" width="240" height="50" rx="8" fill="rgba(255,107,53,.1)" stroke="#ff6b35" stroke-width="1.5"/><text x="300" y="135" text-anchor="middle" fill="#ff6b35" font-size="9" font-weight="bold" font-family="sans-serif">&#9888; Error: query cannot be empty</text><text x="300" y="150" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">clear message &#8594; LLM learns</text><path d="M300,165 Q300,195 300,210" fill="none" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#ar5)"/><text x="380" y="190" fill="#3dd6c4" font-size="8" font-style="italic" font-family="sans-serif">retry</text><rect x="200" y="215" width="200" height="45" rx="8" fill="rgba(82,196,26,.1)" stroke="#52c41a" stroke-width="1.5"/><text x="300" y="235" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold" font-family="monospace">search(&quot;AI news&quot;)</text><text x="300" y="250" text-anchor="middle" fill="#9290a8" font-size="8" font-family="sans-serif">corrected call</text><text x="50" y="285" fill="#fb923c" font-size="9" font-family="sans-serif">Timeout</text><text x="180" y="285" fill="#fb923c" font-size="9" font-family="sans-serif">API fail</text><text x="310" y="285" fill="#fb923c" font-size="9" font-family="sans-serif">Bad args</text><text x="440" y="285" fill="#fb923c" font-size="9" font-family="sans-serif">Permission</text><text x="50" y="297" fill="#5e5c74" font-size="10" font-family="sans-serif">kill after N sec</text><text x="180" y="297" fill="#5e5c74" font-size="10" font-family="sans-serif">retry + backoff</text><text x="310" y="297" fill="#5e5c74" font-size="10" font-family="sans-serif">validate first</text><text x="440" y="297" fill="#5e5c74" font-size="10" font-family="sans-serif">auth check</text></svg><div style="font-size:.8rem;color:#9290a8;margin-top:.4rem">চিত্র ৫ — এরর হ্যান্ডলিং: ভুল থেকে শিখে নিজে ঠিক করে</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Resource Leak in Server:</strong> MCP server leaked file handles — crashed after 1000 calls. Fix: always clean up resources.</div></div>


<div class="code-block">Tool Error Handling &amp; Safety:

ERROR HANDLING (tools break, plan for it):

১. TIMEOUT
  → tool takes too long → kill after N seconds
  → return: "Error: request timed out after ৩০s"
  → LLM can retry with simpler request
  
  Implementation:
    async def call_with_timeout(tool, args, timeout=৩০):
      try:
        return await asyncio.wait_for(
          tool(**args), timeout=timeout)
      except TimeoutError:
        return "Error: timed out. Try a simpler query."

২. API FAILURE
  → external API down (৫০৩, ৫০০)
  → retry with exponential backoff
  → fallback to cached results
  
  return: "Error: weather service unavailable. 
           Please try again later."

৩. INVALID ARGUMENTS
  → LLM provides wrong type, missing field
  → validate before executing!
  → return: "Error: 'city' is required but 
             was not provided. Please provide 
             a city name."

৪. PERMISSION DENIED
  → tool requires auth, user lacks permission
  → return: "Error: permission denied. 
             You need admin access for this."

LLM ERROR ADAPTATION (the magic!):
  
  LLM receives error → adapts:
  
  LLM: search("", num_results=৫)
  Tool: "Error: query cannot be empty"
  LLM: search("machine learning", num_results=৫)
  Tool: [results...]
  LLM: "Here are the results..."
  
  → LLM learns from error, self-corrects!
  → this is why clear error messages matter

TOOL SAFETY LAYERS:

  # ──────────────────────────────────────# 
  #  Layer ১: INPUT VALIDATION            # 
  #  → type check, range check            # 
  #  → sanitize (no SQL injection!)       # 
  #  → parameter constraints              # 
  # ──────────────────────────────────────# 
  #  Layer ২: AUTHORIZATION               # 
  #  → does user have permission?         # 
  #  → rate limiting (max N/min)          # 
  #  → tool whitelist (only approved)     # 
  # ──────────────────────────────────────# 
  #  Layer ৩: SANDBOXING                   # 
  #  → code execution: isolated container  # 
  #  → file access: restricted paths       # 
  #  → network: filtered                   # 
  # ──────────────────────────────────────# 
  #  Layer ৪: HUMAN APPROVAL              # 
  #  → destructive actions: pause         # 
  #  → send_email, delete_file, deploy    # 
  #  → human must approve before execute  # 
  # ──────────────────────────────────────# 
  #  Layer ৫: AUDIT LOGGING               # 
  #  → every tool call logged             # 
  #  → who, what, when, result            # 
  #  → for debugging + compliance         # 
  # ──────────────────────────────────────# 

DESTRUCTIVE TOOL CLASSIFICATION:

  Read-only (safe, auto):
    → search, get_weather, read_file
    → no side effects
  
  Write (caution, log):
    → write_file, create_record
    → creates data, reversible
  
  Destructive (HUMAN APPROVAL):
    → delete_file, send_email, deploy
    → irreversible or high-impact
  
  System-level (BLOCKED without admin):
    → exec, system_command, format_drive
    → never allow without explicit permission</div>

<div class="dialogue">হিফয — protection, preservation, safeguarding। কুরআনে আল্লাহ বলেন — "নিশ্চয় আমরা কুরআন নাজিল করেছি এবং নিশ্চয় আমরাই এর সংরক্ষক।" (১৫:৯)। সংরক্ষণ = হিফয। টুল safety-ও হিফয — প্রতিটা টুলের সুরক্ষা। validation, authorization, sandboxing — সব হিফয। যে হিফয করে, সে নিরাপদ। যে অবহেলা করে, সে বিপদে।</div>
<div class="dialogue en">"Hifz — protection, preservation, safeguarding. Allah says — 'We sent down the Quran and We are its preserver.' (15:9). Preservation = hifz. Tool safety too — protecting every tool. Validation, authorization, sandboxing — all hifz. One who protects, is safe. One who neglects, is in danger."</div>`,
  senior:{
    title:"Tool Safety Checklist",
    body:`<p>☐ Input validation: types, ranges, sanitization</p><p>☐ Authorization: user permissions checked</p><p>☐ Rate limiting: max N calls/minute</p><p>☐ Tool whitelist: only approved tools</p><p>☐ Sandboxing: isolated execution for code tools</p><p>☐ Human approval: destructive tools pause for approval</p><p>☐ Audit logging: every call logged with timestamp</p><p>☐ Clear errors: LLM can self-correct from message</p><p>☐ Timeout: kill long-running tools</p><p>☐ Fallback: if tool fails, alternative available</p>`
  }
});
