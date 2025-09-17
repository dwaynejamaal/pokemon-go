document.getElementById('action-button').addEventListener('click', startAdventure);

// Get species
function getSpecies() {
  let species = prompt("Are you a 'trainer' or a 'pokemon'?");
  if (!species) {
    alert("Species is required to start your adventure!");
    species = getSpecies();
  }
  return species.trim().toLowerCase();
}

// Trainer name prompt
function startAdventure() {
  let name = prompt("Enter your name:");
  if (!name) {
    alert("A name is required to start your adventure!");
  }

  // Get species
species = getSpecies();

  let notValid = true;
  while (notValid) {
    if (species !== "trainer" && species !== "pokemon") {
      alert("Please enter 'trainer' or 'pokemon' for your species.");
      species = getSpecies();
    } else {
      notValid = false;
    }
  }

  // Initialize points
  let points = 0;

  // Initialize continueGame
  let continueGame = true;

  while (continueGame) {
    let pokemonChoice = prompt("Choose your pokemon (Squirtle or Charizard)");
    if (!pokemonChoice) {
      alert("A pokemon selection is required to start your adventure!");
    }

    // Log character info
    const player = {
      name,
      species,
      pokemon: [pokemonChoice]
    };
    console.log("Player created:", player);

    let computerChoice = Math.random() < 0.5 ? "Squirtle" : "Charizard";
    console.log("Your competitor chose: " + computerChoice);

    if (pokemonChoice === computerChoice) {
      points -= 1;
      alert("You lost the match! You lose 1XP point. Current points: " + points);
    } else {
      points += 1;
      alert("You won the match! You gain 1XP point. Current points: " + points);
    }

    // Prompt to continue or end the game
    let continueChoice = prompt("Do you want to continue playing? (yes/no)");
    if (continueChoice.trim().toLowerCase() !== "yes") {
      // End game
      continueGame = false;
      alert('Game over: Your total points '+ points);
    }
  }

  // Final log
  console.log(`Adventure complete!`);
  console.log(`Name: ${player.name}`);
  console.log(`Species: ${player.species}`);
  console.log(`Pokemon: ${player.pokemon}`);
  console.log(`Total points: ${points}`);
}



