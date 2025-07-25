from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import firebase_admin
from firebase_admin import credentials, db

def addition(request):
    resultat = None
    if request.method == 'POST':
        try:
            nombre1 = int(request.POST.get('nombre1', 0))
            nombre2 = int(request.POST.get('nombre2', 0))
            resultat = nombre1 * nombre2
        except ValueError:
            resultat = "Veuillez entrer des nombres valides"
    
    return render(request, 'calcul/addition.html', {'resultat': resultat})


from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime

@api_view(['POST'])
def addition_api(request):
    try:
        nombre1 = int(request.data.get('nombre1', 0))
        nombre2 = int(request.data.get('nombre2', 0))
        somme = nombre1 + nombre2

        # Enregistrement dans Firebase
        ref = db.reference('additions')  # Crée un dossier 'additions'
        ref.push({
            'nombre1': nombre1,
            'nombre2': nombre2,
            'somme': somme,
            'timestamp': datetime.now().isoformat()
        })

        return Response({'somme': somme})
    except (ValueError, TypeError):
        return Response({'error': 'Entrées invalides'}, status=400)

# Initialiser Firebase une seule fois
import os
if not firebase_admin._apps:
    cred = credentials.Certificate(os.path.join(os.path.dirname(__file__), 'firebase_key.json'))
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://testfirebase-a2d93-default-rtdb.firebaseio.com/'  # ← Remplace par ton URL
    })
@api_view(['POST'])
def inscription_view(request):
    try:
        nom = request.data.get('nom')
        telephone = request.data.get('telephone')
        email = request.data.get('email')
        motdepasse = request.data.get('motdepasse')

        ref = db.reference('utilisateurs')
        ref.push({
            'nom': nom,
            'telephone': telephone,
            'email': email,
            'motdepasse': motdepasse,
            'timestamp': datetime.now().isoformat()
        })

        return Response({'message': 'Utilisateur enregistré avec succès'})
    except Exception as e:
        return Response({'error': str(e)}, status=500)
    
    
    
@api_view(['POST'])
def connexion_view(request):
    email = request.data.get('email')
    motdepasse = request.data.get('motdepasse')

    try:
        ref = db.reference('utilisateurs')
        data = ref.get()

        if not data:
            return Response({'error': 'Aucun utilisateur trouvé'}, status=404)

        # Recherche d’un utilisateur qui correspond
        for user_id, user_data in data.items():
            if user_data.get('email') == email and user_data.get('motdepasse') == motdepasse:
                return Response({'message': 'Connexion réussie', 'nom': user_data.get('nom')})

        return Response({'error': 'Email ou mot de passe incorrect'}, status=401)

    except Exception as e:
        return Response({'error': str(e)}, status=500)