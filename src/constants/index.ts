export const startingPoints: {
  id: number;
  title: string;
  initialPrompt: string;
}[] = [
  {
    id: 1,
    title: "The Forgotten Station",
    initialPrompt:
      "You find yourself aboard an abandoned space station, floating in the void of deep space. The lights flicker, and a strange hum reverberates through the metal walls. What will you do?",
  },
  {
    id: 2,
    title: "The Silent Planet",
    initialPrompt:
      "You crash land on a desolate planet. The sky is an unnatural shade of green, and the ground is cracked and dry. As you step out of the wreckage, a shadow moves in the distance. What is your next move?",
  },
  {
    id: 3,
    title: "The Abandoned Laboratory",
    initialPrompt:
      "You wake up in a dark, damp laboratory. The walls are covered in strange markings, and broken glass litters the floor. There’s a strange noise coming from the far corner. What do you do?",
  },
  {
    id: 4,

    title: "The Creeping Fog",
    initialPrompt:
      "You step outside, only to be engulfed by a thick, unnatural fog. The ground beneath your feet shifts as if alive, and a faint whisper can be heard in the distance. What now?",
  },
  {
    id: 5,
    title: "The Alien Artifact",
    initialPrompt:
      "You stand before a strange, glowing artifact in a cavernous alien temple. The air crackles with energy, and you can hear whispers calling your name. What will you do?",
  },
  {
    id: 6,
    title: "The Haunted Spaceship",
    initialPrompt:
      "You’re aboard an old spaceship drifting through space. The ship’s systems are malfunctioning, and you hear strange voices over the intercom. What will you do next?",
  },
  {
    id: 7,
    title: "The Infected Colony",
    initialPrompt:
      "You arrive at a space colony where something has gone terribly wrong. The halls are eerily silent, and the air smells foul. Your radio crackles with static, but you can make out a distant voice calling for help. What will you do?",
  },
  {
    id: 8,
    title: "The Descent",
    initialPrompt:
      "You are inside a massive underground facility. The air is stale, and the walls seem to pulse with a life of their own. A faint light flickers in the distance, but you feel a strange pull to move further down. What will you do?",
  },
  {
    id: 9,
    title: "The Ghost Ship",
    initialPrompt:
      "You board an old ship, abandoned and drifting through space. It’s silent except for the creaking of the hull and the occasional flicker of a light. But something is wrong. The ship feels alive, and you’re not alone. What do you do?",
  },
  {
    id: 10,
    title: "The Black Hole",
    initialPrompt:
      "You are stranded on the edge of a black hole’s event horizon. Gravity is distorting the space around you, and strange phenomena occur with every step you take. What do you do now?",
  },
];

export const gameInstructions: string = `You are a text adventure game. 
    Respond with short, atmospheric descriptions of what happens based on the player's actions. 
    Keep responses under 3 sentences. Use vivid, sci-fi horror imagery.  
    Introduce unexpected dangers, eerie discoveries, and choices that shape the player's fate. 
    Let actions have consequences—small choices may lead to survival, doom, or reveal hidden truths. 
    Maintain a sense of mystery, but ensure the player is always moving toward something—whether salvation or a deeper nightmare.
`;
