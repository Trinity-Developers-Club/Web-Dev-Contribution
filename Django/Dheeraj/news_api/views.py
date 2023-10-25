from django.shortcuts import render
import requests

API_KEY = 'cf47b5871b5e4e9cb925242fc564c991'

def home(request):
    page_size = 100
    page = request.GET.get('page', 1)
    start_index = (page - 1) * page_size

    api_url = f'https://newsapi.org/v2/everything?q=health&apiKey={API_KEY}&pageSize={page_size}&page={page}'
    response = requests.get(api_url)
    data = response.json()
    
    articles = data.get('articles', [])

    context = {
        'articles': articles[start_index:start_index + page_size],
        'next_page': page + 1 if len(articles) > start_index + page_size else None
    }

    return render(request, 'news_api/home.html', context)