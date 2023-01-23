import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {BooksApi} from '../../api';
import {BookType, RootStackParamList} from '../../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';

export const Book = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'BookDetails', 'MyStack'>) => {
  const [book, setBook] = useState<BookType | null>(null);
  const [bookLoading, setBookLoading] = useState(false);
  const [isOpenLongDesc, setOpenLongDesc] = useState(false);

  const fetchBookRequest = useCallback(async () => {
    try {
      setBookLoading(true);
      const data = await BooksApi.getBookById(route.params.id);
      setBook(data);
    } catch (err) {
    } finally {
      setBookLoading(false);
    }
  }, [route.params.id]);

  useEffect(() => {
    fetchBookRequest();
  }, [fetchBookRequest]);

  return (
    <View style={styles.page}>
      {bookLoading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#740265" />
        </View>
      ) : book ? (
        <ScrollView>
          <View>
            <View style={styles.field}>
              <Text style={styles.label}>Title: </Text>
              <Text style={styles.value}>{book.title}</Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Authors: </Text>
              <View style={styles.list}>
                {book.authors.map((item, idx) => (
                  <Text key={item} style={styles.value}>
                    {item}
                    {idx + 1 === book.authors.length ? '' : ', '}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Page Count: </Text>
              <Text style={styles.value}>{book.pageCount}</Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>ISBN: </Text>
              <Text style={styles.value}>{book.isbn}</Text>
            </View>
            {Boolean(book.publishedDate) && (
              <View style={styles.field}>
                <Text style={styles.label}>Published Date: </Text>
                <Text style={styles.value}>
                  {moment(book.publishedDate?.$date).format('YYYY/MM/DD')}
                </Text>
              </View>
            )}

            <View style={styles.field}>
              <Text style={styles.label}>Categories: </Text>
              <View style={styles.list}>
                {book.categories.map((item, idx) => (
                  <Text key={item} style={styles.value}>
                    {item}
                    {idx + 1 === book.categories.length ? '' : ', '}
                  </Text>
                ))}
              </View>
            </View>
            {book.shortDescription || book.longDescription ? (
              <View>
                <Text style={[styles.label, styles.description]}>
                  Description:{' '}
                </Text>
                <View>
                  <Text style={styles.value}>
                    {isOpenLongDesc
                      ? book.longDescription
                      : book.shortDescription || book.longDescription}
                  </Text>
                  {Boolean(book.longDescription && book.shortDescription) &&
                    !isOpenLongDesc && (
                      <TouchableOpacity
                        onPress={() => setOpenLongDesc(true)}
                        style={styles.readMoreButton}>
                        <Text style={styles.readMoreLabel}>Read more</Text>
                      </TouchableOpacity>
                    )}
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.container}>
          <Text style={styles.noDataText}>No Data</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  noDataText: {
    color: '#f815da',
    fontSize: 20,
  },
  page: {
    padding: 10,
    paddingBottom: 30,
    flex: 1,
  },
  readMoreButton: {
    marginTop: 10,
  },
  readMoreLabel: {
    color: '#f815da',
  },
  description: {
    marginVertical: 5,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  label: {
    color: '#740265',
    fontWeight: 'bold',
  },
  value: {
    color: '#1e111d',
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
