from flask import Flask, request, jsonify
import spacy

app = Flask(__name__)
nlp = spacy.load('en_core_web_sm')

@app.route('/extract-keywords', methods=['POST'])
def extract_keywords():
    descriptions = request.json.get('descriptions', [])
    keywords = []
    for desc in descriptions:
        doc = nlp(desc)
        keywords.extend([token.text for token in doc if token.is_alpha and not token.is_stop])
    return jsonify({"keywords": keywords})

if __name__ == '__main__':
    app.run(debug=True)
