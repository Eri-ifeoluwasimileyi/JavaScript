atm = []
def create_card(card_number):

	number = [card_number]

	atm.append(number)

	return number
	
	

def validate_issuer(card_number):

	card_number = "4567890532246761"
	if len(card_number) != 16:

		return "valid: false, reason: invalid length"
	
	elif len(card_number) == 16:

		return "valid: true, issuer: Visa"

	else:
		return card_number
	 

def master_card(card_number,):
	
	card_number = ["4567890532246761"]
	first_number = 0

	if first_number in card_number[0] == 5:

		return 	"Master Card"		

	elif len(card_number) != 16:

		return "valid: false, reason: invalid length"
	
	elif len(card_number) == 16:

		return "valid: true, issuer: Visa"

