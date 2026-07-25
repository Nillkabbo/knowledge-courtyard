# Adversarial Machine Learning and LLM Security Study Guide

Adversarial machine learning is a specialized research field at the intersection of machine learning and computer security. It focuses on the study of attacks against machine learning algorithms and the development of robust defenses. This guide provides a comprehensive overview of the threat landscape, attack modalities, and defensive architectures, with a specific focus on Large Language Models (LLMs).

---

## I. Core Concepts and Challenges

### The Mismatch of Assumptions
Traditional machine learning assumes that training and test data are Independent and Identically Distributed (IID). Adversarial machine learning addresses environments where this assumption is violated by users who intentionally supply fabricated data.

### Challenges in Security Applications
Applying machine learning to security contexts introduces unique hurdles:
*   **Concept Drift:** Malware creators continuously adapt, causing the statistical properties of malicious samples to change over time.
*   **Class Imbalance:** Malicious samples often represent a tiny fraction (0.01% to 2%) of total data, leading to models biased toward the majority class.
*   **Labeling Instability:** Antivirus engines may conflict in their classification, making ground truth difficult to establish.
*   **Data Snooping:** A common pitfall where models are trained using information that would be unavailable in real-world scenarios.
*   **Base Rate Fallacy:** A failure to correctly interpret performance metrics within the context of large class imbalances.

---

## II. Taxonomy of Attacks

Attacks against supervised machine learning are categorized along three primary axes:

| Axis | Description |
| :--- | :--- |
| **Classifier Influence** | Whether the attack disrupts the classification phase or involves an earlier exploration of vulnerabilities. |
| **Security Violation** | Whether the attack misclassifies malicious data as legitimate (evasion) or causes legitimate data to be rejected. |
| **Specificity** | **Targeted attacks** aim for a specific disruption; **Indiscriminate attacks** aim for general system failure. |

### Primary Attack Strategies
1.  **Data Poisoning:** Contaminating the training set to reprogram the algorithm. This includes **backdoor attacks**, where specific triggers cause the model to execute malicious behaviors.
2.  **Byzantine Attacks:** Deviations from expected behavior in distributed or federated learning environments, often addressed through robust gradient aggregation rules.
3.  **Evasion Attacks:** Exploiting a trained model's imperfections to misclassify modified samples (e.g., image-based spam).
4.  **Model Extraction:** Probing a system to extract proprietary training data or reconstruct the model itself (model stealing).

---

## III. LLM Threat Landscape (OWASP Top 10)

The Open Web Application Security Project (OWASP) identifies the following critical threats for LLMs (2024–2025):

1.  **Prompt Injection:** Overriding system prompts via malicious user or document input.
2.  **Insecure Output Handling:** LLM outputs used in execution or rendering without sanitization, leading to XSS or code injection.
3.  **Training Data Poisoning:** Corrupting the model's base knowledge or behavior during training.
4.  **Model DoS:** Sending resource-heavy inputs (e.g., 1M tokens) to crash the system.
5.  **Supply Chain Vulnerabilities:** Using compromised third-party models, datasets, or plugins.
6.  **Sensitive Info Disclosure:** Leaking system prompts, PII, or API keys.
7.  **Insecure Plugin Design:** Lack of argument validation in plugins allowing unauthorized actions.
8.  **Excessive Agency:** Granting agents too much freedom, resulting in unintended system changes.
9.  **Overreliance:** Users trusting LLM output without verification, leading to errors.
10. **Model Theft:** Unauthorized copying of model weights or training data.

---

## IV. Specific Attack Methodologies

### Evasion Techniques
*   **White Box Attacks:** The adversary has access to model parameters.
    *   **Fast Gradient Sign Method (FGSM):** Adds a linear amount of noise calculated from the gradient to cause misclassification.
    *   **Carlini & Wagner (C&W):** A robust optimization-based attack designed to bypass defensive distillation.
*   **Black Box Attacks:** The adversary only sees inputs and outputs.
    *   **Square Attack:** A score-based attack that randomly perturbs square sections of pixels.
    *   **HopSkipJump Attack:** A query-efficient attack that relies only on predicted output classes rather than scores.

### Jailbreaking (Alignment Bypassing)
Jailbreaking attempts to force a model to produce prohibited content by bypassing RLHF (Reinforcement Learning from Human Feedback). Common tactics include:
*   **Persona/Role-play:** Instructing the model to act as a character without restrictions (e.g., "DAN" - Do Anything Now).
*   **Many-Shot Jailbreak:** Using a large context window to provide hundreds of fake dialogues where the AI answers harmful questions, establishing a pattern for the model to follow.
*   **Crescendo (Gradual Escalation):** Slowly leading the model from safe topics to dangerous ones through multi-turn dialogue.
*   **Encoding:** Hiding malicious requests using Base64, ROT13, or Leetspeak.

---

## V. Defensive Architectures

### Defense in Depth (Layered Security)
An integrated defense architecture involves multiple independent layers:
1.  **Network Security:** WAF, DDoS protection, and rate limiting.
2.  **Authentication/Authorization:** API key validation and Role-Based Access Control (RBAC).
3.  **Input Guardrails:** Prompt injection detection and length limits.
4.  **System Prompt Fortification:** Using delimiters (e.g., XML tags) and explicit instructions that system prompts override user input.
5.  **Output Guardrails:** Sanitizing output for PII, toxicity, and hallucinations.
6.  **Action Validation:** Tool whitelisting and human-in-the-loop for irreversible actions.
7.  **Monitoring & Response:** Audit logs, anomaly detection, and a system "kill switch."

### Specialized Defensive Tools
*   **Guardrail Frameworks:** Tools like **NeMo Guardrails** (NVIDIA) and **Guardrails AI** filter content, restrict topics, and enforce output formats.
*   **Red Teaming Tools:** Automated probing tools like **Garak** and **PyRIT** are used to attack one's own system to find vulnerabilities before adversaries do.
*   **Differential Privacy (DP-SGD):** Adding noise during training to prevent membership inference attacks.

---

## VI. Short-Answer Practice Quiz

1.  **What is the difference between direct and indirect prompt injection?**
    *   *Answer:* Direct injection occurs when a user provides malicious input to the model. Indirect injection occurs when the model retrieves adversarial instructions from an external source, such as a webpage, email, or document.
2.  **Define "Concept Drift" in the context of computer security.**
    *   *Answer:* It is the change in the statistical properties of malicious samples over time as attackers adapt their techniques to evade detection.
3.  **What is "Membership Inference"?**
    *   *Answer:* A targeted model extraction attack that determines whether a specific data point was included in the model's training set, often posing a risk to sensitive PII or medical records.
4.  **How does the "Square Attack" improve query efficiency?**
    *   *Answer:* It uses an iterative random search to perturb only a small square section of pixels at a time, terminating as soon as an adversarial example is found.
5.  **What is the purpose of "Watermarking" in LLM security?**
    *   *Answer:* To embed a hidden signature or statistical pattern in model responses to identify and prove the theft of model outputs.

---

## VII. Essay Prompts for Deeper Exploration

1.  **The "Eternal Arms Race":** Discuss the cycle of attack and defense in adversarial machine learning. How do developments like gradient masking and "many-shot" jailbreaking illustrate the ongoing evolution of this field?
2.  **Ethics of Defensive Data Poisoning:** Analyze tools like *Nightshade* and *Fawkes*. Is it ethically justifiable for artists to use data poisoning to protect their work from unauthorized AI scraping? What are the potential collateral effects on model utility?
3.  **The Swiss Cheese Model of Defense:** Explain how the concept of "Defense in Depth" addresses the reality that no single security measure is 100% effective. Use the 7-layer architecture for LLMs to support your argument.
4.  **Privacy vs. Utility in Training:** Explore the trade-offs between implementing Differential Privacy (DP-SGD) and maintaining the accuracy/performance of a machine learning model. How does the "privacy budget" (epsilon) dictate this balance?

---

## VIII. Glossary of Important Terms

*   **Adversarial Example:** A specially crafted input designed to look normal to humans but cause misclassification by a machine learning model.
*   **Backdoor Attack:** A type of poisoning where a model is trained to associate a specific trigger (e.g., a specific word or pixel) with a malicious output.
*   **Base Rate Fallacy:** A failure to account for the low frequency of a "base rate" (like the small percentage of malware) when evaluating the effectiveness of a classifier.
*   **Differential Privacy:** A technique that adds mathematical noise to a dataset or training process to ensure individual data points cannot be identified.
*   **FGSM (Fast Gradient Sign Method):** A white box attack that uses the sign of the gradient to create adversarial perturbations.
*   **Jailbreaking:** The act of bypassing a model's safety filters or alignment through clever prompting or role-playing.
*   **Model Extraction:** Probing a model via its API to reconstruct the model's logic or steal the underlying training data.
*   **Prompt Leaking:** An attack where the user tricks an LLM into revealing its hidden internal system instructions.
*   **RAG (Retrieval-Augmented Generation):** A framework that provides an LLM with access to external, verified data sources to improve accuracy.
*   **Red Teaming:** A security exercise where a team (or automated tool) acts as an adversary to find and exploit vulnerabilities in a system.