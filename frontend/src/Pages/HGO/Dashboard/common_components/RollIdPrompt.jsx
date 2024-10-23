// import React, { useEffect, useState } from 'react';

// const RollIdPrompt = ({ onRollIdSubmit }) => {
//   const [rollId, setRollId] = useState('');

//   useEffect(() => {
//     const inputRollId = prompt("Please enter your roll ID:")?.toLowerCase() || '';
//     setRollId(inputRollId);
//     onRollIdSubmit(inputRollId); 
//   }, [onRollIdSubmit]);

//   return null; 
// };

// export default RollIdPrompt;



// import React, { useEffect } from 'react';
// import { useRollId } from './RollIdContext';

// const RollIdPrompt = () => {
//   const { rollId, setRollId } = useRollId();

//   useEffect(() => {
//     // Show prompt only if rollId is not set
//     if (!rollId) {
//       const input = prompt('Please enter your Roll ID:');
//       if (input) {
//         setRollId(input); // Set the roll ID in context
//       }
//     }
//   }, [rollId, setRollId]);

//   return null; // No UI to render
// };

// export default RollIdPrompt;


// import { useEffect, useState } from 'react';
// import { useRollId } from './RollIdContext';

// const RollIdPrompt = () => {
//   const { rollId, setRollId } = useRollId();
//   const [hasPrompted, setHasPrompted] = useState(false); // State to track if prompt has been shown

//   useEffect(() => {
//     // Show prompt only if rollId is not set and it has not been prompted yet
//     if (!rollId && !hasPrompted) {
//       const input = prompt('Please enter your Roll ID:');
//       if (input) {
//         setRollId(input); // Set the roll ID in context
//       }
//       setHasPrompted(true); // Mark that we have shown the prompt
//     }
//   }, [rollId, setRollId, hasPrompted]);

//   return null; // No UI to render
// };

// export default RollIdPrompt;



import { useEffect} from 'react';
import { useRollId } from './RollIdContext';

let hasPrompted = false; // Static variable to track prompt state across renders

const RollIdPrompt = () => {
    const { rollId, setRollId } = useRollId();

    useEffect(() => {
        console.log('RollIdPrompt useEffect triggered'); // Log when useEffect runs

        if (!rollId && !hasPrompted) {
            console.log('Showing prompt for Roll ID'); // Log before showing the prompt
            hasPrompted = true; // Set the static variable
            const input = prompt('Please enter your Roll ID:');
            if (input) {
                console.log(`Roll ID entered: ${input}`); // Log the input received
                setRollId(input);
            } else {
                console.log('No Roll ID entered'); // Log if no input was provided
            }
        } else {
            console.log(`Roll ID already set: ${rollId}`); // Log if rollId is already set
        }
    }, [rollId, setRollId]);

    return null; // No UI to render
};

export default RollIdPrompt;

