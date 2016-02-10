from helpers import *

@app.route('/')
def serve_client():
    angular_index = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                 "..", "public", "views")
    return send_from_directory(angular_index, 'index.html')

@app.route('/api/companies')
def get_companies():
    return display_companies()

@app.route('/api/companies/<name>')
def get_specific_company(name):
    return display_specific_company(name)

@app.route('/api/companies', methods = ['POST'])
def post_companies():
    return create_company()

if __name__ == '__main__':
    app.run(port=8080, debug=True)
