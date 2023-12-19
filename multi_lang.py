import sys
from googletrans import Translator

def translate_to_english(text):
    translator = Translator()
    translated_text = translator.translate(text, dest='en')
    return translated_text.text

def register_complaint(user_input):
    translated_complaint = translate_to_english(user_input)
    print("\nTranslated Complaint (in English):", translated_complaint)
    
    # Save the translated complaint to a file or database
    save_to_file(translated_complaint)

def save_to_file(complaint):
    with open("complaints.txt", "a", encoding="utf-8") as file: 
        file.write(complaint + "\n")

if name == "main":
    if len(sys.argv) > 1:
        user_complaint = ' '.join(sys.argv[1:])
    else:
        user_complaint = input("Register Complaint (in your language): ")

    register_complaint(user_complaint)