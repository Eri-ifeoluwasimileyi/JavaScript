import cardnumber
from cardnumber import *
import unittest
#from unittest import TestCase


class TestCardNumber(unittest.TestCase):

	def test_that_card_number_was_created(self):
		cardnumber.create_card


	def test_validate_issuer(self):
		
		actual = cardnumber.validate_issuer(4567890532246761)
		expected = "valid: true, issuer: Visa"
		self.assertEqual(actual, expected)

	def test_master_card(self):
		
		actual = cardnumber.master_card(5678905322467614)
		expected = "Master card"
		self.assertEqual(actual, expected)
