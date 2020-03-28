import React, { useState, useEffect } from 'react';
import styles from './Result.module.scss';
import { useAppState } from '../../appState';
import { result, getCharacters } from '../../helpers';

export function Result() {
    const [{ checked, length }, setState] = useAppState();
    const [value, setValue] = useState(0)
    const [unit, setUnit] = useState('hour')
    const [speed, setSpeed] = useState(1000);




// alphabet, length, speed, speedUnit
useEffect(() => {
    let alphabet = getCharacters(checked);
    setValue(result({ alphabet, length , speed, unit}));

}, [checked, length, speed, unit])

    return (
		<div className={styles.Calc}>
			<div>
				speed:
				<input
					type="number"
					min="1000"
					value={speed}
					onChange={e => setSpeed(e.target.value)}
				/>
				passwords per{' '}
				<button onClick={() => setUnit('hour')}>
					hour
				</button>
				/ <button onClick={() => setUnit('second')}>second</button>
			</div>
			<div>
				<span>{value}</span>
				needed, in order to have a 1% probability of at least one
				collision.
			</div>
		</div>
	);
}