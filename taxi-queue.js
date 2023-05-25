function TaxiQueue() {
	let taxi_queue_count = 0;
	let passenger_queue_count = 0;

	function joinQueue() {
		passenger_queue_count++;
	}

	function leaveQueue() {
		if(passenger_queue_count > 0){
			passenger_queue_count--;
		}
	}

	function joinTaxiQueue() {
		taxi_queue_count++;
	}

	function queueLength() {
		return passenger_queue_count;
	}

	function taxiQueueLength() {
		return taxi_queue_count;
	}

	function taxiDepart(){
		if(passenger_queue_count >= 12 && taxi_queue_count > 0){
			taxi_queue_count --;
			passenger_queue_count -= 12;
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}