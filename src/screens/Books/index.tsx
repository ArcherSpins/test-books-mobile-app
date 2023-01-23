import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {BooksApi} from '../../api';
import {BookType, RootStackParamList} from '../../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const Books = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Books', 'MyStack'>) => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [booksLoading, setBooksLoading] = useState(false);

  const fetchBooksRequest = useCallback(async () => {
    try {
      setBooksLoading(true);
      const data = await BooksApi.getBookList();
      setBooks(data);
    } catch (err) {
    } finally {
      setBooksLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooksRequest();
  }, [fetchBooksRequest]);

  return (
    <View style={styles.page}>
      {booksLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#740265" />
        </View>
      ) : (
        <ScrollView>
          {books.map(book => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('BookDetails', {id: book.isbn})
              }
              activeOpacity={0.8}
              style={styles.bookCard}
              key={book.isbn}>
              <View style={styles.bookCardContent}>
                <Image
                  defaultSource={require('../../assets/defaultAvatar.png')}
                  style={styles.avatar}
                  source={{
                    uri: book.thumbnailUrl,
                  }}
                />
                <View>
                  <Text style={styles.title}>{book.title}</Text>
                  <View style={styles.bookCardContentBody}>
                    {book.authors.map((author, idx) => (
                      <Text key={author}>
                        {author}
                        {idx + 1 === book.authors.length ? '' : ', '}
                      </Text>
                    ))}
                  </View>
                  <Text style={styles.status}>{book.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#740265',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  status: {
    color: '#039d9a',
    marginTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  bookCardContent: {
    flexDirection: 'row',
    padding: 10,
  },
  bookCardContentBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingRight: 10,
  },
  bookCard: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  page: {
    flex: 1,
    paddingVertical: 10,
    paddingBottom: 20,
  },
});
