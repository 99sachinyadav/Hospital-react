import {  useState } from "react";
import { GoogleGenAI } from "@google/genai";
 import Typewriter from "./Typewriter";
  import { useRef } from "react";
const Chatbot = ( ) => {
  const [chatInput, setChatInput] = useState("");
  const [conversation, setConversation] = useState([]);
  
 
  const historyRef = useRef([]);
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyAS2BrUOqaFVFSVhvfapY7FEaP_8moSSqw",
  });
  const chatbotReply = async (userProblem) => {
    historyRef.current.push({
      role: "user",
      parts: [{ text: userProblem }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: historyRef.current,
      config: {
        systemInstruction: `you are a   medicine suggester for desieses asked to you and coding  instructer
       and you will give answer only to those problem which are related to medicine or health
          if someone ask you question which is not relate to coading  or data
           you will say "I am a chatbot for medicine and health related queries only, please ask me something related to health or medicine.
             i am giving  you some medicine with there uses and side effect as well as doses give your answer based upon it  you can use it for your problem but i am not a doctor so please consult a doctor before taking any medicine say in last
        and please keep your answer crisp short and to the point  give your responce in following pattern and you have to give answer in the language in which user asking you the question if someone asking answer in hindi then you have to write answer in in hindi language donot hinglish
          
        Here is a structured list of commonly used medicines for stomach pain, including their name, uses, dosage, and side effects:
🟢 1. Dicyclomine

    Brand Names: Cyclopam, Spasrid, Spasmindon

    Use: Relieves stomach cramps and spasms (e.g., IBS, menstrual cramps)

    Dose: 10–20 mg, 3–4 times a day (before meals)

    Side Effects:

        Dry mouth

        Blurred vision

        Drowsiness

        Constipation

🟢 2. Simethicone

    Brand Names: Gas-X, Flatuna, Digene Gel (with other ingredients)

    Use: Reduces bloating, gas, and abdominal discomfort

    Dose: 40–125 mg after meals and at bedtime

    Side Effects:

        Rare and mild

        Nausea (rare)

        Allergic reaction (very rare)
   Atorvastatin hypercholesterolemia; 10 40mg daily; muscle pain, liver enzyme elevation
Levothyroxine hypothyroidism; 25 200µg/day; palpitations, weight changes, insomnia
Metformin type 2 diabetes; 500 2000mg/day (divided); GI upset, rare lactic acidosis
Lisinopril hypertension; 10 40mg daily; cough, hypotension, hyperkalemia
Amlodipine hypertension, angina; 5 10mg daily; edema, headache, flushing
Metoprolol (succinate/ER) hypertension, heart failure; 50 200mg/day; fatigue, bradycardia
Albuterol (salbutamol) asthma/COPD; 2 puffs Q4 6h prn; tremor, tachycardia
Omeprazole GERD, ulcers; 20mg daily before meal; headache, nausea, long term B12 deficiency risk
Losartan hypertension, kidney protection; 50 100mg daily; dizziness, hyperkalemia possible
Gabapentin neuropathic pain, seizures; 300 900mg TID; drowsiness, dizziness, weight gain
Prednisone inflammation, asthma, autoimmune conditions; 5 60mg/day taper; weight gain, mood changes, immunosuppression
Hydrocodone/acetaminophen moderate severe pain; various dosing combinations (e.g. 5/325mg every 4 6h); risk of sedation, respiratory depression, liver injury
Ibuprofen pain, fever, inflammation; 200 600mg Q6 8h; GI upset, ulcers, kidney effects
Meloxicam arthritis pain/inflammation; 7.5 15mg daily; GI irritation, kidney dysfunction
Tramadol moderate pain; 50 100mg Q4 6h prn; dizziness, nausea, risk of dependence
Oxycodone (± acetaminophen) moderate severe pain; varied dosing; sedation, constipation, dependency risk
Diclofenac pain/inflammation; typical 50mg TID; GI, cardiovascular risks
Celecoxib osteoarthritis pain; 100200mg daily; heart risks, GI side effects
Naproxen pain, fever, inflammation; 220 500mg BID; ulcer risk, cardiovascular caution
Aspirin pain, fever; 325 650mg Q4h; not for children with fever (Reye’s syndrome), GI bleeding risk
Acetaminophen (paracetamol) fever, mild pain; 500 1000mg Q4 6h (max ~3g/day); liver toxicity risk
Metamizole (dipyrone) pain, spasms, high fever; oral/IV; risk of agranulocytosis, restricted in some countries
Cetirizine allergy symptoms; 10mg once daily; drowsiness, dry mouth
Azithromycin bacterial infections; e.g. 500mg day 1 then 250mg ×4 days; GI upset, QT prolongation
Amoxicillin (± clavulanate) bacterial infections; typical 500mg TID ×7 10 days; diarrhea, allergic rash
Cephalexin bacterial infections; 500mg Q6h ×7 10 days; GI upset, rash
Sertraline depression, anxiety; 50 200mg daily; nausea, sexual side effects, insomnia
Escitalopram depression/anxiety; 10 20mg daily; similar to sertraline
Trazodone depression, insomnia; 50 150mg at bedtime; sedation, orthostatic hypotension, rare priapism
Furosemide edema, hypertension; 20 80mg daily/BID; electrolyte imbalance, dehydration
Hydrochlorothiazide hypertension, edema; 12.5 25mg daily; electrolyte disturbances
Vitamin D (cholecalciferol) deficiency; dosage ~800 2000IU daily; hypercalcemia if overused
Folic acid deficiency, pregnancy; 400 1000µg daily; generally well tolerated
Cyclobenzaprine muscle spasm; 5 10mg TID; drowsiness, dry mouth
Benzonatate cough suppressant; 100 200mg TID prn; sedation, choking if chewed
Alprazolam anxiety; 0.25 0.5mg TID; sedation, dependency risk
Allopurinol gout prevention; 100 300mg daily; rash, GI upset, rare hypersensitivity
Hydroxychloroquine / Chloroquine malaria, rheumatic diseases; varies; retinal toxicity, GI upset
Methotrexate rheumatoid arthritis; low dose weekly (e.g. 7.5 20mg); hepatotoxicity, bone marrow suppression
Sulfasalazine rheumatoid/joint disease; 500 1000mg BID; GI upset, rash, liver effects
Azathioprine autoimmune; varied dosing; immunosuppression, marrow suppression
Methoclopramide nausea, gastroparesis; 10mg TID before meals; EPS side effects, diarrhea
Domperidone nausea, gastroparesis (in countries where available); dose varies; QT risk
Simethicone gas relief; 80mg after meals; minimal side effects
Ranitidine / Famotidine heartburn/acid; 150mg BID (ranitidine) or 20mg BID (famotidine); rare confusion in elderly
Loperamide diarrhea; 4mg then 2mg after each stool (max 16mg/day); constipation
Dextromethorphan cough suppressant; 10 20mg h prn; mild sedation, dizziness
Pseudoephedrine nasal congestion; 60mg h; insomnia, increased blood pressure


"`,
      },
    });

    historyRef.current.push({
      role: "model",
      parts: [{ text: response.text }],
    });

    console.log("\n");
    // console.log(response.text);
    return response.text;
  };


    
    const handleSend = async (e) => {
    e.preventDefault();
    if (chatInput.trim() === "") return;

    // Add the message to the array
    setConversation((prevMessages) => [...prevMessages, { id:crypto.randomUUID(), role: "user", talk: chatInput }]);
    // console.log(`user ->${chatInput}`);
    try {
      const botreply = await chatbotReply(chatInput);
      // console.log(`bot ->${botreply}`);
      setConversation((prevreply) => [...prevreply, { id: crypto.randomUUID(), role: "bot", talk: botreply }]);
    } catch (error) {
      console.error("Error getting bot reply:", error);
    }
    console.log("conversation", conversation);
    setChatInput("");
  };
 


  return (
    <div className="bg-white shadow-xl rounded-lg p-6   sm:max-w-8xl border-4 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Chatbot</h2>

<div className="bg-gray-100 rounded min-h-[400px] p-4 h-64 mb-4 overflow-y-auto">
  {conversation.length > 0 ? (
    conversation.map((msg, index) => {
      if (msg.role === "user") {
        return (
          <div key={msg.id+msg.talk} className="text-right mb-2">
                    
            <div className="bg-blue-100 p-2 rounded-lg inline-block">
                {/* { msg.talk+msg.id } */}
              {msg.talk}
            </div>
          </div>
        );
      } else {
        return (
          <div key={msg.id+msg.talk} className="text-left mb-2 max-w-3xl">
                        
           <div className="">
            {/* {msg.talk}  */}
                <Typewriter className="bg-blue-100 p-2 rounded-lg" key={msg.id+msg.talk} message={msg.talk} />
                
           </div>
          </div>
        );
      }
    })
  ) : (
    <p className="text-gray-500 text-center">No messages yet.</p>
  )}
</div>

      <form onSubmit={handleSend} className="flex">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          className=" w-full sm:flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
