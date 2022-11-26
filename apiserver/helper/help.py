

def dictfetchall(cursor):
    "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]

# def verifyContent(array):
#     if array.__len__() != 0:
#         return array[1]
#     else:
#         return []


# request.POST.get('firstName', False),
#                 request.POST.get('secondName', False),
#                 request.POST.get('motherLastName', False),
#                 request.POST.get('fatherLastName', False),
#                 request.POST.get('email', False),
#                 request.POST.get('password', False)